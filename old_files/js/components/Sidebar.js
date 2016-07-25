var React = require('react');
require('../../../node_modules/semantic-ui-css/semantic.js');

import { showSettings } from '../actions/BookmrkrActions.js'

var Sidebar = React.createClass({

    propTypes: {
        sidebarShown: React.PropTypes.bool.isRequired
    },

    _openSettings: function() {
        if (!this.props.settingsShown) {
            showSettings();
        }
    },
    
    componentDidUpdate: function () {
        var self = React.findDOMNode(this.refs.sidebar);
        this.props.sidebarShown ? $(self).sidebar('show') : $(self).sidebar('hide');
    },

    render: function () {
        return (
            <div className="ui left labeled vertical sidebar menu" ref="sidebar">

                <div className="link item">
                    <i className="cubes icon large"></i>
                    Bkmrkr
                </div>

                <div className="link item">
                    <i className="bookmark icon large"></i>
                    All the bookmarks
                </div>

                <div className="link item">
                    <i className="tags icon large"></i>
                    Tags
                </div>

                <div className="link item">
                    <i className="trash icon large"></i>
                    Trash
                </div>

                <div className="link item" onClick={this._openSettings}>
                    <i className="options icon large"></i>
                    Settings
                </div>

                <div className="link item last parent" id="logout">
                    <i className="log out icon large"></i>
                    Logout
                </div>
            </div>
        );
    }
});

module.exports = Sidebar;


