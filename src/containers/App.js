import React, { Fragment, Component } from 'react';
import Title from 'components/Title';
import Search from 'components/Search';
import Results from 'components/Results';

class App extends Component {
	state = {
		search: ''
	};

	handleClickSearch = search => this.setState({ search });

	render() {
		return (
			<Fragment>
				<Title />
				<Search onChange={this.handleChangeSearch} onSearch={this.handleClickSearch} />
				<Results term={this.state.search} />
			</Fragment>
		);
	}
}

export default App;
