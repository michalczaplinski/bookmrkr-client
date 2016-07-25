var React = require('react');

var BookmarkAdder = React.createClass( {

    render: function() {
        return 	(
            <div className="ui circular white icon button add bookmark">
                <i className="big plus icon"></i>
            </div>
        );
    }
});

module.exports = BookmarkAdder;