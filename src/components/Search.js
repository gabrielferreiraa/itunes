import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import global from "helpers/global";

const StyledSearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`;

const StyledSearch = styled.input`
  border: none;
  border-bottom: 3px solid ${global.style.primaryColor};
  background-color: transparent;
  outline: none;
  padding: 5px;
  font-size: 1.4em;
  width: 40%;
  text-align: center;
  font-family: ${global.style.fontFamily};
  font-weight: 300;
  color: ${global.style.secondaryColor};
`;

const StyledSearchBtn = styled.button`
  right: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  > img {
    width: 30px;
    will-change: transform;
    transition: transform 200ms ease;
    image-rendering: optimizeQuality;
  }

  &:hover {
    > img {
      transform: rotate(20deg);
    }
  }
`;

const Search = ({ onChange, onSearch }) => (
  <StyledSearchWrapper>
    <StyledSearch
      type="text"
      placeholder="o que você está procurando?"
      onChange={onChange}
    />
    <StyledSearchBtn type="button" onClick={onSearch}>
      <img
        src="search.svg"
        title="Clique aqui para realizar a busca"
        alt="Ícone de busca"
      />
    </StyledSearchBtn>
  </StyledSearchWrapper>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Search;
