require('jquery');
require('./ajax.js');

$('.ui.button.login').on('click', function () {
    $('.ui.modal.login').modal('show');
});

$("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();

    var login = $.post("/api/auth/login/", {"username": username, "password": password})
        .done(function () {
            window.location.replace('api/bookmarks/');
        })
        .fail(function () {
            alert('login unsuccessful');
        });
});