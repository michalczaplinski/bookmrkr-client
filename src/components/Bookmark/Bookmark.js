import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Tag from '../Tag/Tag';
import GLOBALS from '../../globals';

class Bookmark extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.deleteBookmark = this.deleteBookmark.bind(this);
  }

  renderTag(tag) {
    return (
      <Tag key={tag.id} name={tag.name}/>
    )
  }

  deleteBookmark() {
    return this.props.deleteBookmark(this.props.id);
  }

  render() {

    let coverUrl = `${GLOBALS.image_server_path}/78x78`;

    return (
      <div styleName="bookmark">
        <a styleName="image-container" href="#">
          <img src={coverUrl} alt="" height="78" width="78"/>
        </a>
        <div styleName="content-container">
          <div styleName="header">
            <b>{this.props.title}</b>
          </div>
          <div styleName="description">
            {this.props.description}
          </div>
          <div styleName="tags-container">
            {this.props.tags.map(this.renderTag)}
          </div>
        </div>
        <div styleName="actions-container">
          <div styleName="delete-button" onClick={this.deleteBookmark}>
            X
          </div>
          <div styleName="edit-button">
            e
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Bookmark, styles);
