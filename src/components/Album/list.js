import React from 'react';
import styled from 'styled-components';

const StyledAlbumList = styled.ul`
	list-style-type: none;
	padding: 0;
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
`;

const AlbumList = ({ children }) => <StyledAlbumList>{children}</StyledAlbumList>;

export default AlbumList;
