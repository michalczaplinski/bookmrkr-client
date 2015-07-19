var React = require('react');
import BookmarkList from '../components/BookmarkList';
import BookmarkAdder from '../components/BookmarkAdder';

var Grid = React.createClass( {

    render: function() {
        return  (
            <div className="ui stackable page grid">
                <div className="twelve wide column centered">
                    <BookmarkList/>
                    <BookmarkAdder/>
                </div>
            </div>
        );
    }
});

module.exports = Grid;