import styled from 'styled-components';
import global from 'helpers/global';

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
	width: calc((100% / 6) - 20px);
	flex-wrap: wrap;
	margin: 0 10px 30px 10px;

	@media screen and (max-width: 1200px) {
		width: calc((100% / 3) - 20px);
	}

	@media screen and (max-width: 768px) {
		width: calc((100% / 2) - 20px);
	}

	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const CoverImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	will-change: filter;
	transition: filter 200ms ease;
	cursor: pointer;

	&:hover {
		filter: grayscale(80%);
	}
`;

const wrapperHeight = 40;

export const WrapperInformations = styled.div`
	position: relative;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: space-between;
	text-align: left;
	height: ${wrapperHeight}px;
	width: 100%;
	margin-top: 5px;
`;

export const ArtistName = styled.span`
	font-family: ${global.style.fontFamily};
	font-weight: 700;
	width: 100%;
	font-size: 0.8em;
	color: ${global.style.secondaryColor};
	position: relative;
	display: flex;
	align-items: center;
`;

export const MusicName = styled.span`
	font-style: italic;
	font-size: 0.7em;
`;
