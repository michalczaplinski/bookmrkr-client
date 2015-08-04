var React = require('react');
import { showSidebar, showSettings } from '../actions/BookmrkrActions';

var TopMenu = React.createClass( {

    propTypes: {
        sidebarShown: React.PropTypes.bool.isRequired,
        settingsShown: React.PropTypes.bool.isRequired
    },

    _openSidebar: function() {
        if (!this.props.sidebarShown) {
            showSidebar();
        }
    },

    _openSettings: function() {
        if (!this.props.settingsShown) {
            showSettings();
        }
    },

    render: function() {

        return (
            <div className="ui menu grid items">
                <div className="left aligned three wide column" onClick={this._openSidebar}>
                    <a className="item slidebar">
                        <i className="sidebar icon large"></i>
                    </a>
                </div>
                <div className="ten wide column">
                    <div className="ui fluid input">
                        <input type="text" placeholder="Search for bookmarks..."/>
                    </div>
                </div>
                <div className="right aligned three wide column">
                    <a className="item settings" onClick={this._openSettings}>
                        <i className="setting icon large"></i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = TopMenu;