import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        Settings
      </div>
    );
  }
}

export default CSSModules(Settings, styles);
