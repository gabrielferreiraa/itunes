import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchWrapper, StyledSearchBtn, StyledSearch } from './elements';

class Search extends Component {
	state = {
		search: ''
	};

	handleChange = e => this.setState({ search: e.target.value });

	handleKeyUp = e => {
		const ENTER = 13;

		if (e.keyCode === ENTER) {
			this.props.onSearch(this.state.search);
		}
	};

	render() {
		const { onSearch } = this.props;
		const { search } = this.state;

		return (
			<StyledSearchWrapper>
				<StyledSearch
					type="text"
					placeholder="o que você está procurando?"
					onKeyUp={this.handleKeyUp}
					onChange={this.handleChange}
				/>
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
