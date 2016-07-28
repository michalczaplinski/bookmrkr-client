import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Divider = () => {
  return (
    <div>
      Divider
    </div>
  )
};

export default CSSModules(Divider, styles);
