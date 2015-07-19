var React = require('react');
var App = require('./containers/App');

//require('../semantic/dist/semantic');
//var $ = require('../../node_modules/jquery');

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

React.render(
    <App />,
    document.getElementById("content")
);
