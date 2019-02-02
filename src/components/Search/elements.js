import styled from 'styled-components';
import global from 'helpers/global';

export const StyledSearchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
`;

export const StyledSearch = styled.input`
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

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const StyledSearchBtn = styled.button`
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
