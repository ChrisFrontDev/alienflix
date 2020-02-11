import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDiscover } from "../store/actions/index";
class DiscoverMoviesList extends Component {
  componentDidMount() {
    this.props.fetchDiscover();
  }

  render() {
    if (!this.props.discover) {
      return <div>loading</div>;
    } else {
      return (
        <div>
          Filmes mais populares:
          <ul>
            {this.props.discover.map(el => (
              <li key={el.id}>{el.title || el.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return { discover: state.discover.data };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchDiscover }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverMoviesList);
