import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Bookmark from '../Bookmark/Bookmark';

class BookmarkList extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div styleName="content">
        <Bookmark/>

      </div>
    );
  }
}

export default CSSModules(BookmarkList, styles);
