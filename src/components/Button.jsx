import React from "react";
import styled from "styled-components";

const Button = ({ text, callback }) => {
  return <Wrapper onClick={callback}>{text}</Wrapper>;
};

const Wrapper = styled.button`
  display: block;
  background-color: var(--dark-grey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--font-big);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export default Button;
