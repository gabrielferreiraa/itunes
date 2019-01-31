import styled from 'styled-components';
import global from '../../global';

export const List = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 30px;
`;

export const Item = styled.li`
	display: flex;
	justify-content: center;
	width: calc(100% / 7);
	flex-wrap: wrap;
	margin: 0 10px 30px 10px;
`;

export const CoverImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	will-change: filter;
	transition: filter 200ms ease;

	&:hover {
		filter: grayscale(80%);
	}
`;

export const WrapperInformations = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	height: 40px;
	width: 100%;
	margin-top: 5px;
`;

export const ArtistName = styled.span`
	font-family: ${global.style.fontFamily};
	font-weight: 700;
	width: 100%;
	font-size: 0.8em;
	color: ${global.style.secondaryColor};
`;

export const MusicName = styled.span`
	font-style: italic;
	font-size: 0.7em;
`;
