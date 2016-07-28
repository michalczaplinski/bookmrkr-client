import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class TopBar extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div styleName="topbar">
        TOP BAR
      </div>
    );
  }
}

export default CSSModules(TopBar, styles);
