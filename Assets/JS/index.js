$(document).ready(function () {
    const url = location.pathname.split('/');
    const page = url[url.length - 1];
    $('.nav-link.active').removeClass('active').removeAttr('aria-current');
    $('a[href="' + page + '"]').addClass('active').attr('aria-current', 'page');
    $('body').css('paddingTop', `${$('.navbar').height()}px`);
});