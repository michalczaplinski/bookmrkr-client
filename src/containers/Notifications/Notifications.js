import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';

import Notification from '../../components/Notification/Notification';

class Notifications extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.renderNotification = this.renderNotification.bind(this);
  }

  renderNotification(id) {
    return (
      <Notification id={id}
                    key={id}
                    cancelDeleteBookmark={this.props.cancelDeleteBookmark}/>
    )
  }

  render() {
    return (
      <div styleName="notifications-container">
        {this.props.notifications.map(this.renderNotification)}
      </div>
    );
  }
}

export default CSSModules(Notifications, styles);
