import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	position: relative;

	@media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
	@media (min-width: 1200px) {
		width: 1170px;
	}
`;

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
