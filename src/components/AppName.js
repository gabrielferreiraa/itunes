import React from 'react';
import styled from 'styled-components';
import global from '../global';

const StyledAppName = styled.h1`
	text-align: center;
	font-family: ${global.style.fontFamily};
	color: ${global.style.primaryColor};
	font-weight: 900;
	font-size: 3.5em;
`;

const AppName = () => <StyledAppName>{global.appName}</StyledAppName>;

export default AppName;
