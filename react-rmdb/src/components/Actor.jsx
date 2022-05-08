import React from "react";
import styled from "styled-components";

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor thumbnail" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  color: var(--white);
  background-color: var(--dark-grey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

export default Actor;
