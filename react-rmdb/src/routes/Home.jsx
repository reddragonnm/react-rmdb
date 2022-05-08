import React, { useState } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../api/config";
import useHomeFetch from "../hooks/useHomeFetch";

import NoImg from "../images/no_image.jpg";

import HeroImage from "../components/HeroImage";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { state, loading, loadMoreCallBack, error } = useHomeFetch(searchTerm);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? `Search results` : "Popular Movies"}>
        {state.results.map((movie) => (
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
        ))}
      </Grid>

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={loadMoreCallBack} />
      )}
    </>
  );
};

export default Home;
