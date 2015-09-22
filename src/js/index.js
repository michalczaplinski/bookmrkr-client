require('jquery');
require('./ajax.js');
require('js-cookie');

$(document).ready( function() {

    $('.loginbutton').on('click', function () {
        $('.ui.modal.login').modal('show');
    });

    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        var login = $.post("api/auth/login/", {"username": username, "password": password})
            .done(function (data) {
                window.location.replace('/bookmarks');
                Cookies.set('bookrmrkr_token', data);
                console.log(data);
            })
            .fail(function () {
                alert('login unsuccessful' + username.toString() + password.toString());
            });
    });
});
