import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../api/config";
import NoImg from "../images/no_image.jpg";
import { fetchMovie, fetchCredits } from "../api/API";

import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";
import Grid from "../components/Grid";
import Actor from "../components/Actor";

const NewMovie = () => {
  const { movieId } = useParams();

  const {
    isLoading,
    isError,
    data: movie,
  } = useQuery(["movie", movieId], async () => {
    const [movie, credits] = await Promise.all([
      fetchMovie(movieId),
      fetchCredits(movieId),
    ]);

    const directors = credits.crew.filter(
      (member) => member.job === "Director"
    );

    return {
      ...movie,
      actors: credits.cast,
      directors,
    };
  });

  if (isError) return <div>Something went wrong ...</div>;
  if (isLoading) return <Spinner />;

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

export default NewMovie;
