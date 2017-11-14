import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postCredentials } from '../actions/index';

class Onboard extends Component {
  constructor({ sessionID }, props) {
    super(props);
  }
  render() {
    return <div>'hello'</div>;
  }
}

function mapStateToProps(state) {
  return { sessionID: state.sessionID };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postCredentials }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboard);
