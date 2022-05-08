import React from "react";
import { useParams } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../api/config";
import NoImg from "../images/no_image.jpg";
import useMovieFetch from "../hooks/useMovieFetch";

import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";
import Grid from "../components/Grid";
import Actor from "../components/Actor";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />

      <MovieInfo movie={movie} />

      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImg
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
