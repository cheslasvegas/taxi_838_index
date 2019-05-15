"use strict";

$(document).ready(function () {

    $(document).on('scroll', function (e) {
        if ($(this).scrollTop() >= 40) $('#header').addClass('colored-header');
        else $('#header').removeClass('colored-header');
    });

    $('#burgerButton').on('click', function () {
        if (!$('#mobileMenu').hasClass('active')) {
            $('#mobileMenu').addClass('active');
            $("#header").addClass('auto-height');
            $('#mobileWrapper').addClass('active');
            $("#mainMenu").addClass('full-width');
        } else {
            $('#mobileMenu').removeClass('active');
            $("#header").removeClass('auto-height');
            $("#mobileWrapper").removeClass('active');
            $("#mainMenu").removeClass('full-width');
        }
    });

    $('#collapsableTrigger').on('click', function () {
        $('#subMenu').toggleClass('active');
    })
});

