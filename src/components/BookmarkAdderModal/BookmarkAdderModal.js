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

class BookmarkAdderModal extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleFormChange = this.handleFormChange.bind(this);
    this.sendData = this.sendData.bind(this);

    this.state = {
      title: '',
      description: '',
      url: ''
    };
  }

  handleFormChange(event) {
    this.setState({value: event.target.value});
  }

  sendData() {
    return this.props.createBookmark(this.state)
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        style={modalStyles}>
        <div styleName="close-modal" onClick={close} > X</div>

        <input type="text" value={this.state.title} placeholder="title" onChange={this.handleFormChange}/>
        <input type="text" value={this.state.description} placeholder="description" onChange={this.handleFormChange}/>
        <input type="text" value={this.state.url} placeholder="url" onChange={this.handleFormChange}/>

        <button onClick={this.sendData}></button>
      </Modal>
    )
  }
}

export default CSSModules(BookmarkAdderModal, styles);
