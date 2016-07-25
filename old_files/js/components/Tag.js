const React = require('react');

const Tag = React.createClass({

  render: function(tag) {
    return (
      <div className="ui right floated tiny label">
        {this.props.name}
        <i className="delete icon"></i>
      </div>
    );
  }
});

module.exports = Tag;
