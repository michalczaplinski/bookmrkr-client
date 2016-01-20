const React = require('react');

const Bookmark = React.createClass({
    // TODO: There is no image file - need to configure static root for this.

  render: function() {
    return (
      <div className="item bookmark">
        <div className="ui centered container segment">

          <div className="ui image floated left ">
              <img src="/static/dist/img/test_image.jpg" height="80" width="80"/>
          </div>

          <div className="content">

            <div className="ui right floated small compact basic icon buttons iconbar">
                <div className="ui button"><i className="edit icon"></i></div>
                <div className="ui button"><i className="remove icon"></i></div>
                <div className="ui button"><i className="share icon"></i></div>
            </div>
            <div className="header">Stevie Feliciano</div>
              <div className="description">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo. </p>
              </div>
              <div className="ui right floated tiny label">
                    Fun <i className="delete icon"></i>
              </div>
              <div className="ui right floated tiny label">
                  Crazy <i className="delete icon"></i>
              </div>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Bookmark;
