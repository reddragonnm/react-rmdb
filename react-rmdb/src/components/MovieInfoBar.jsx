import React from "react";
import styled from "styled-components";

import { calcTime, convertMoney } from "../api/helpers";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <Column>
        <p>Running Time: {calcTime(time)}</p>
      </Column>

      <Column>
        <p>Budget: {convertMoney(budget)}</p>
      </Column>

      <Column>
        <p>Revenue: {convertMoney(revenue)}</p>
      </Column>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--dark-grey);
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--med-grey);
  border-radius: 20px;
  margin: 0 20px;
  flex: 1;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export default MovieInfoBar;
