var React = require('react');

var TopMenu = React.createClass( {

    propTypes : {
        toggleSidebar: React.PropTypes.func.isRequired
    },

    render: function() {
        const { toggleSidebar } = this.props;
        return (
            <div className="ui menu grid items">
                <div className="left aligned three wide column" onClick={toggleSidebar}>
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
                    <a className="item settings">
                        <i className="setting icon large"></i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = TopMenu;