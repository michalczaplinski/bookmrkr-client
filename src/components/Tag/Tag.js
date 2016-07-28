import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Tag = ({name}) => {
  return (
    <a styleName="tag" href="#">
      {name}
    </a>
  )
};

export default CSSModules(Tag, styles);
