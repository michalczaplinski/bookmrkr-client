import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


class BookmrkrApp extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        hi
        <div>{this.props.sidebar.isOpen}</div>
      </div>
    )
  }

}

const Application = connect(
  (state) =>  state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch)} }
)(BookmrkrApp);


export default Application;
