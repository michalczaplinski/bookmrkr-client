var React = require('react');

//require('./ajax.js');

//$(document).ready( function() {
//
//    $('.bookmark').hover(function () {
//        $(this).find('.iconbar').css('visibility', 'visible');
//    }, function () {
//        $(this).find('.iconbar').css('visibility', 'hidden');
//    });
//
//    $('.options').parent('.link.item').on('click', function () {
//        $('.ui.modal').modal('show');
//    });
//
//    $("#logout").click(function () {
//        var login = $.post("/api/auth/logout/")
//            .done(function () {
//                window.location.replace('/');
//            })
//            .fail(function () {
//                alert('logout unsuccessful');
//            });
//    });
//});
//

var Bookmark = React.createClass( {
    // There is no image file - need to configure static root for this.

    render: function() {
        return (
        <div className="item bookmark">
                    <div className="ui segment">

                        <div className="ui image floated left ">
                            <img src="/static/img/test_image.jpg" height="80" width="80"/>
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


var BookmarkList = React.createClass( {

     render: function() {
        return (
            <div className="ui relaxed link items">
                <Bookmark/>
            </div>
        );
    }
});

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

var BookmarkAdder = React.createClass( {

    render: function() {
        return 	(
            <div className="ui circular white icon button add bookmark">
                <i className="big plus icon"></i>
            </div>
        );
    }
});

var Divider = React.createClass( {

    render: function() {
        return (
            <div className="ui horizontal divider">
                May
            </div>
        );
    }
});

React.render(
    <Grid />,
    document.getElementById("content")
);


// tutorial1.js

//var CommentBox = React.createClass({
//    render: function () {
//        return (
//            <div className="commentBox">
//                Hello, world! I am a CommentBox.
//            </div>
//        );
//    }
//});
//React.render(
//    <CommentBox />,
//    document.getElementById('content')
//);

//});