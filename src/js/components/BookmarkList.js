var React = require('react');
import Bookmark from './Bookmark'

var BookmarkList = React.createClass( {
    
    render: function() {
        return (
            <div className="ui relaxed link items">
                <Bookmark/>
            </div>
        );
    }
});

module.exports = BookmarkList;
