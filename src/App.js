import React, { Component } from 'react';
import AppName from './components/AppName';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
	state = {
		search: '',
		showResults: false
	};

	handleChangeSearch(e) {
		this.setState({ search: e.target.value });
	}

	handleClickSearch() {
		this.setState({ showResults: true });
	}

	render() {
		return (
			<div>
				<AppName />
				<Search onChange={this.handleChangeSearch.bind(this)} onSearch={this.handleClickSearch.bind(this)} />
				<Results term={this.state.search} />
			</div>
		);
	}
}

export default App;
