import React from 'react';
import styled from 'styled-components';
import global from 'helpers/global';

const StyledFooter = styled.footer`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	bottom: 0;
`;

const Credits = styled.span`
	color: ${global.style.primaryColor};
	font-size: 0.9em;
`;

const Footer = () => (
	<StyledFooter>
		<Credits>Made by Gabriel Ferreira</Credits>
	</StyledFooter>
);

export default Footer;
