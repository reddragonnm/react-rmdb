import React from "react";
import styled from "styled-components";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--med-grey);

    @media (max-width: 768px) {
      font-size: var(--font-big);
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

export default Grid;
