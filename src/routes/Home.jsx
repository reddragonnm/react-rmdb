import React, { useState, useCallback } from "react";
import { useInfiniteQuery } from "react-query";

import { fetchMovies } from "../api/API";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../api/config";

import NoImg from "../images/no_image.jpg";

import HeroImage from "../components/HeroImage";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const NewHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getInfiniteMovies = useCallback(
    ({ pageParam = 1 }) => fetchMovies(searchTerm, pageParam),
    [searchTerm]
  );

  const { data, fetchNextPage, hasNextPage, isError, isFetchingNextPage } =
    useInfiniteQuery(["movies", searchTerm], getInfiniteMovies, {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      },
    });

  const heroMovie = data?.pages[0]?.results[0];

  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && heroMovie && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroMovie.backdrop_path}`}
          title={heroMovie.original_title}
          text={heroMovie.overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      {data && data.pages.length > 0 && (
        <Grid header={searchTerm ? `Search results` : "Popular Movies"}>
          {data.pages.map((page) => {
            return page.results.map((movie) => (
              <Thumbnail
                key={movie.id}
                movieId={movie.id}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImg
                }
                clickable
              />
            ));
          })}
        </Grid>
      )}

      {isFetchingNextPage && <Spinner />}

      {hasNextPage && !isFetchingNextPage && (
        <Button text="Load More" callback={() => fetchNextPage()} />
      )}
    </>
  );
};

export default NewHome;
