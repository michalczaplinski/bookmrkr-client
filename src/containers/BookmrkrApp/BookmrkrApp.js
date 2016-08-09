import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import * as actions from '../../actions';

import Sidebar from './../../components/Sidebar/Sidebar';
import TopBar from './../../components/TopBar/TopBar';
import BookmarkList from './../../components/BookmarkList/BookmarkList';
import BookmarkAdder from '../../components/BookmarkAdder/BookmarkAdder';
import Notifications from '../Notifications/Notifications';

import CSSModules from 'react-css-modules';
import styles from './style.css';

const modalStyles = {
  overlay: {zIndex: 90} ,
  content: {
    zIndex: 100,
    display: 'flex',
    flexFlow: 'column nowrap'
  }
};

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
          <BookmarkList bookmarks={this.props.data.bookmarks}
                        deleteBookmark={this.props.actions.deleteBookmark}/>
          <BookmarkAdder open={this.props.actions.openBookmarkAdder}/>
          <Notifications notifications={this.props.notifications}
                         cancelDeleteBookmark={this.props.actions.cancelDeleteBookmark}
          />
          <Modal
            isOpen={this.props.ui.adder.isOpen}
            onRequestClose={this.props.actions.closeBookmarkAdder}
            style={modalStyles}>
            <div styleName="close-modal" onClick={this.props.actions.closeBookmarkAdder}> X </div>
          </Modal>
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
