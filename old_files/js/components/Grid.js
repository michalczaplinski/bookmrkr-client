var React = require('react');
import BookmarkList from 'BookmarkList';
import BookmarkAdder from 'BookmarkAdder';

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
