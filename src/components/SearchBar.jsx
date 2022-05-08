import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(state), 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search icon" />

        <input
          type="text"
          placeholder="Search movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--dark-grey);
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: var(--max-width);
  width: 100%;
  height: 55px;
  background-color: var(--med-grey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--font-big);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;

export default SearchBar;
