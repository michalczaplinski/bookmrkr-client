require('jquery');
// FIXME ajax loading is not correct here, apparently
// require('./ajax.js');
require('js-cookie');

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$(document).ready( function() {

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    $('.loginbutton').on('click', function () {
        $('.ui.modal.login').modal('show');
    });

    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        var login = $.post("api/auth/login/", {"username": username, "password": password})
            .done(function (data) {
                document.cookie = 'bookmrkr_token=' + data + '; domain=localhost:8000;expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/'
                window.location.assign('/bookmarks');
                console.log(data);
            })
            .fail(function () {
                alert('login unsuccessful' + username.toString() + password.toString());
            });
    });
});
