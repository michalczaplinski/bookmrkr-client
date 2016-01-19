var React = require('react');
var ReactDOM = require('react-dom');
var BookmrkrApp = require('./components/BookmrkrApp');

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

var content = document.getElementById('content');

ReactDOM.render(
    <BookmrkrApp/>,
    content
);
