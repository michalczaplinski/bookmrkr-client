import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Tag from '../Tag/Tag';

class Bookmark extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  _renderTag() {
    return (
      <Tag>
      </Tag>
    )
  }

  render() {
    return (
      <div styleName="bookmark">
        <div styleName="image-container">
          <img src="" alt=""/>
        </div>
        <div styleName="content-container">
          <div styleName="header">
            header
          </div>
          <div styleName="description">
            descriptsion
          </div>
          <div styleName="tags-container">
            {this._renderTag()}
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Bookmark, styles);
