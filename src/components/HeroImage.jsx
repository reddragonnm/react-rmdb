import React from "react";
import styled from "styled-components";

const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

// ! styles
const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image}) var(--dark-grey);
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;

  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--font-large);

    @media (max-width: 500px) {
      font-size: var(--font-big);
    }
  }

  p {
    font-size: var(--font-med);

    @media (max-width: 500px) {
      font-size: var(--font-small);
    }
  }

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

export default HeroImage;
