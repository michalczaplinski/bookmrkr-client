var React = require('react');
//var $ = require('../../../node_modules/jquery/dist/jquery');
require('../../semantic/dist/semantic.js');

var Sidebar = React.createClass({

    componentDidMount: function () {
        const { appState } = this.props;
        var self = React.findDOMNode(this.refs.sidebar);

        appState.sidebar_shown ? $(self).sidebar('show') : $(self).sidebar('hide');
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

                <div className="link item">
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

