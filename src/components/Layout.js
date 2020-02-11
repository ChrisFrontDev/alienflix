import React, { Component } from "react";
import TrendingMoviesList from "./TrendingMoviesList";
import DiscoverMoviesList from "./DiscoverMoviesList";
// import { Container } from './styles';
// TODO: Create Nav Component"
class Layout extends Component {
  render() {
    return (
      <div>
        <nav>Nav</nav>
        <TrendingMoviesList></TrendingMoviesList>
        <DiscoverMoviesList></DiscoverMoviesList>
      </div>
    );
  }
}

export default Layout;
