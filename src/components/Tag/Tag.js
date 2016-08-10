import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Tag = ({name}) => {
  return (
    <div styleName="tag">
      {name}
    </div>
  )
};

export default CSSModules(Tag, styles);
