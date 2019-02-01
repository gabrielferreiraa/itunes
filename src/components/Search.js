import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import global from 'helpers/global';

const StyledSearchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10vh;
`;

const StyledSearch = styled.input`
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
`;

const StyledSearchBtn = styled.button`
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

class Search extends Component {
	state = {
		search: ''
	};

	handleChange = e => this.setState({ search: e.target.value });

	render() {
		const { onSearch } = this.props;
		const { search } = this.state;

		return (
			<StyledSearchWrapper>
				<StyledSearch type="text" placeholder="o que você está procurando?" onChange={this.handleChange} />
				<StyledSearchBtn type="button" onClick={() => onSearch(search)}>
					<img src="search.svg" title="Clique aqui para realizar a busca" alt="Ícone de busca" />
				</StyledSearchBtn>
			</StyledSearchWrapper>
		);
	}
}

Search.propTypes = {
	onSearch: PropTypes.func.isRequired
};

export default Search;
