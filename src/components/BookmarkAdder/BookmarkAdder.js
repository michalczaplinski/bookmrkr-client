import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const BookmarkAdder = ({open}) => {
  return (
    <div styleName="adder" onClick={open}>
      +
    </div>
  )
};

export default CSSModules(BookmarkAdder, styles);
