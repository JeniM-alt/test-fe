$(function () {
    $('.navbar-toggle button').on('click', function (e) {
        e.preventDefault();

        $('.container').toggleClass('is-vertical');
    });

    $('.mm-toggle').on('click', function (e) {
        e.preventDefault();

        $('body').toggleClass('mm-open');
    });

    $('body').on('click', function (e) {
        if ($(e.target).closest('.navbar').length) {
            return;
        }

        if ($(e.target).closest('.mm-toggle').length) {
            return;
        }

        if (!$(this).hasClass('mm-open')) {
            return;
        }

        $(this).removeClass('mm-open');
    })
});