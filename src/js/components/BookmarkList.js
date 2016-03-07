var React = require('react');
import Bookmark from './Bookmark'

var BookmarkList = React.createClass( {

  renderBookmark: function(data) {
    return (
        <Bookmark key={data.id} data={data}/>
    );
  },

  getInitialState: function() {
    return {
      bookmarks: [{}]
    };
  },

  componentDidMount: function() {
    $.get(this.props.source).then(data => {
      if (this.isMounted()) {
        this.setState({bookmarks: data});
      }
    }.bind(this));
  },


  render: function() {
    let bookmarks = this.state.bookmarks;
    return(
      <div className="ui relaxed link items">
        {bookmarks.map(this.renderBookmark)}
      </div>
    )
  }
});

module.exports = BookmarkList;
