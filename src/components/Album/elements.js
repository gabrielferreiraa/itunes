import React from 'react';
import styled from 'styled-components';
import global from 'helpers/global';

export const TrackItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 10px;
	margin-bottom: 5px;
	border-bottom: 1px solid rgba(105, 105, 105, 0.058);
	padding-bottom: 5px;
	position: relative;
`;

export const Image = styled.img`
	margin-right: 7px;
	border-radius: 10px;
`;

export const Name = styled.span`
	width: 100%;
	font-weight: 700;
	color: ${global.style.primaryColor};
	margin-right: 41px;
`;

export const Collection = styled.small`
	text-transform: uppercase;
	font-size: 0.6em;
	font-weight: 900;
	color: ${global.style.secondaryColor};
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const StyledWrapperChart = styled.div`
	width: 33px;
	position: absolute;
	right: 50px;
`;

export const WrapperChart = ({ children }) => <StyledWrapperChart>{children}</StyledWrapperChart>;
