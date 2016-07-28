import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Bookmark from '../Bookmark/Bookmark';

class BookmarkList extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  _renderBookmark(bookmark) {
    return (
      <Bookmark key={bookmark.id}
                cover={bookmark.cover}
                title={bookmark.title}
                description={bookmark.description}
                tags={bookmark.tags}>
      </Bookmark>
    )
  }

  render() {
    return (
      <div styleName="content">
        {this.props.bookmarks.map(this._renderBookmark)}
      </div>
    );
  }
}

export default CSSModules(BookmarkList, styles);
