import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const BookmarkAdder = () => {
  return (
    <a styleName="adder" href="#">
      +
    </a>
  )
};

export default CSSModules(BookmarkAdder, styles);
