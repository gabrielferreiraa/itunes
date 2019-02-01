import styled from 'styled-components';
import global from 'helpers/global';

export const Avatar = styled.img`
	border-radius: 50%;
	width: 250px;
	height: 250px;
	object-fit: cover;
	border: 2px solid ${global.style.primaryColor};
`;

export const ArtistName = styled.h3`
	font-weight: 200;
	font-size: 1.5em;
	margin: 0;
	color: ${global.style.secondaryColor};
`;

export const Genre = styled.span`
	text-transform: uppercase;
	font-size: 0.75em;
	font-weight: 900;
	color: ${global.style.secondaryColor};
`;

export const Wrapper = styled.div`
	text-align: center;
`;
