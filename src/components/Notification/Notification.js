import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class Notification extends Component {

  constructor(props) {
    super(props);
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    return this.props.cancelDeleteBookmark(this.props.id);
  }

  render() {
    return (
      <div styleName="notification">
        <div> deleted bookmark nr {this.props.id} </div>
        <div styleName="undo-button" onClick={this.cancel}>UNDO {'<-----'}</div>
      </div>
    )
  }
}

export default CSSModules(Notification, styles);
