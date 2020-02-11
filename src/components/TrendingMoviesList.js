import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTrending } from "../store/actions/index";
class TrendingMovies extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    if (!this.props.trending) {
      return <div>loading</div>;
    } else {
      return (
        <div>
          Lançamentos(banner)
          <ul>
            {this.props.trending.map(el => (
              <li key={el.id}>{el.title || el.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return { trending: state.trending.data };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTrending }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
