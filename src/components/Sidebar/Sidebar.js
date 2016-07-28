import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div styleName="sidebar">
        <b>Sidebar content</b>
      </div>
    );
  }
}

export default CSSModules(Sidebar, styles);
