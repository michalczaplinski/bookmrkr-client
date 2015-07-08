require('jquery');
require('./ajax.js');

$('.slidebar').on("click", function () {
    $('.left.sidebar').sidebar('toggle');
});

$('.bookmark').hover(function () {
    $(this).find('.iconbar').css('visibility', 'visible');
}, function () {
    $(this).find('.iconbar').css('visibility', 'hidden');
});

$('.options').parent('.link.item').on('click', function () {
    $('.ui.modal').modal('show');
});

$("#logout").click(function () {
    var login = $.post("/api/auth/logout/")
        .done(function () {
            window.location.replace('/');
        })
        .fail(function () {
            alert('logout unsuccessful');
        });
});
