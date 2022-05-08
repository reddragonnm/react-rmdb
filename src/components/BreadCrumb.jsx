import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--med-grey);
  color: var(--white);
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 20px;

  span {
    font-size: var(--font-med);
    color: var(--white);
    padding-right: 10px;

    @media (max-width: 768px) {
      font-size: var(--font-small);
    }
  }
`;

export default BreadCrumb;
