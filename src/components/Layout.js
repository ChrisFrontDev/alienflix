import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTrending } from "../store/actions/index";
// import { Container } from './styles';
// TODO: REMOVE THIS FETCH FROM LAYOUT TO NEW "BANNER COMPONENT"
class Layout extends Component {
  componentDidMount() {
    this.props.fetchTrending();
  }

  render() {
    if (!this.props.trending) {
      return <div>loading</div>;
    } else {
      return (
        <ul>
          {this.props.trending.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
