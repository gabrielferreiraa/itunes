import React from "react";
import styled from "styled-components";
import global from "helpers/global";

const StyledTitle = styled.h1`
  text-align: center;
  font-family: ${global.style.fontFamily};
  color: ${global.style.primaryColor};
  font-weight: 900;
  font-size: 3.5em;
`;

const Title = () => <StyledTitle>{global.appName}</StyledTitle>;

export default Title;
