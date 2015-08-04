require('jquery');
require('./ajax.js');

$(document).ready( function() {

    $('.loginbutton').on('click', function () {
        $('.ui.modal.login').modal('show');
    });

    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        var login = $.post("/api/auth/login/", {"username": username, "password": password})
            .done(function () {
                window.location.replace('/bookmarks');
            })
            .fail(function () {
                alert('login unsuccessful' + username.toString() + password.toString());
            });
    });
});