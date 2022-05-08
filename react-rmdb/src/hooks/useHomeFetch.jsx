import { useState, useEffect, useCallback } from "react";
import API from "../api/API";

import { useInfiniteQuery } from "react-query";

const initialState = {
  page: 0,
  results: [],
  total_results: 0,
  total_pages: 0,
};

const useNewHomeFetch = (searchTerm) => {
  const fetchMovies = useCallback(
    ({ pageParam = 1 }) => {
      return API.fetchMovies(searchTerm, pageParam);
    },
    [searchTerm]
  );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery(["movies", fetchMovies], fetchMovies, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page + 1 < lastPage.total_pages) return lastPage.page + 1;
    },
  });
};

const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  const loadMoreCallBack = () => {
    fetchMovies(state.page + 1, searchTerm);
    setLoading(true);
  };

  return { state, loading, loadMoreCallBack, error };
};

export default useHomeFetch;
