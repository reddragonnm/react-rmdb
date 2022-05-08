import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Thumbnail = ({ movieId, image, clickable }) => (
  <>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie thumbnail" />
      </Link>
    ) : (
      <Image src={image} alt="movie thumbnail" />
    )}
  </>
);

const Image = styled.img`
  width: 100%;
  max-width: 420px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;

  animation: animateThumbnail 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbnail {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
export default Thumbnail;
