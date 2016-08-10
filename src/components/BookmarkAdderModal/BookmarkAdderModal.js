import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Modal from 'react-modal';


const modalStyles = {
  overlay: {zIndex: 90} ,
  content: {
    zIndex: 100,
    display: 'flex',
    flexFlow: 'column nowrap'
  }
};

const BookmarkAdderModal = ({isOpen, close}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={modalStyles}>
      <div styleName="close-modal" onClick={close}> X </div>
    </Modal>
  )
};

export default CSSModules(BookmarkAdderModal, styles);
