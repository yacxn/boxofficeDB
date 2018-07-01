import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>Myvid.</h1>
          <input
            type="text"
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
          )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
