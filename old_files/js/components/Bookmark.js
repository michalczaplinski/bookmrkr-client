const React = require('react');
import Tag from './Tag'

const Bookmark = React.createClass({
    // TODO: There is no image file - need to configure static root for this.

  renderTag: function(tag) {
    return (
      <Tag key={tag.id} id={tag.id} name={tag.name}/>
    )
  },

  getDefaultProps: function() {
    return { data: {tags: [{}] } }
  },

  render: function() {

    let tags = this.props.data.tags != undefined ? this.props.data.tags : [{}];

    return (
      <div className="item bookmark">
        <div className="ui centered container segment">
          <div className="ui image floated left ">
              <img src={this.props.data.cover} height="80" width="80"/>
          </div>
          <div className="content">
            <div className="ui right floated small compact basic icon buttons iconbar">
                <div className="ui button"><i className="edit icon"></i></div>
                <div className="ui button"><i className="remove icon"></i></div>
                <div className="ui button"><i className="share icon"></i></div>
            </div>
            <div className="header">{this.props.data.title}</div>
              <div className="description">
                  <p>{this.props.data.description}</p>
              </div>
              {tags.map(this.renderTag)}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Bookmark;
