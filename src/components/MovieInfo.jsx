import React from "react";
import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../api/config";
import NoImg from "../images/no_image.jpg";
import Thumbnail from "./Thumbnail";

const MovieInfo = ({ movie }) => (
  <Wrapper backprop={movie.backdrop_path}>
    <Content>
      <Thumbnail
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImg
        }
        clickable={false}
      />

      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>

          <div className="director">
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map(({ credit_id, name }) => (
              <p key={credit_id}>{name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${(props) =>
      props.backprop
        ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backprop})`
        : ""}
    var(--dark-grey);
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media (max-width: 768px) {
      font-size: var(--font-big);
    }
  }
`;

export default MovieInfo;
