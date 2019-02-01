import React, { Component } from "react";
import Title from "components/Title";
import Search from "components/Search";
import Results from "components/Results";

class App extends Component {
  state = {
    search: "",
    showResults: false
  };

  handleChangeSearch = e => this.setState({ search: e.target.value });

  handleClickSearch = () => this.setState({ showResults: true });

  render() {
    return (
      <div>
        <Title />
        <Search
          onChange={this.handleChangeSearch}
          onSearch={this.handleClickSearch}
        />
        <Results term={this.state.search} />
      </div>
    );
  }
}

export default App;
