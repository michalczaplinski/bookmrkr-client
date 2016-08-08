import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import Sidebar from './../../components/Sidebar/Sidebar';
import TopBar from './../../components/TopBar/TopBar';
import BookmarkList from './../../components/BookmarkList/BookmarkList';
import BookmarkAdder from '../../components/BookmarkAdder/BookmarkAdder';

import CSSModules from 'react-css-modules';
import styles from './style.css';

class BookmrkrApp extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div styleName="app">
        <Sidebar/>
        <TopBar/>
        <div styleName="content-container">
          <BookmarkList bookmarks={this.props.bookmarks}
                        deleteBookmark={this.props.actions.deleteBookmark}/>
          <BookmarkAdder/>
        </div>
      </div>
    )
  }
}

const Application = CSSModules(BookmrkrApp, styles);

export default connect(
  (state) =>  state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch)} }
)(Application);
