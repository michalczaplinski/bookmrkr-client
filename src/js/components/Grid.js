var React = require('react');
import BookmarkList from '../components/BookmarkList';
import BookmarkAdder from '../components/BookmarkAdder';

var Grid = React.createClass( {

  render: function() {
    return  (
      <div className="ui stackable four column grid container">
        <div className="ui centered container">
          <BookmarkList source="/api/bookmarks/"/>
          <BookmarkAdder/>
        </div>
      </div>
    );
  }
});

module.exports = Grid;
