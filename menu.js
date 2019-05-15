"use strict";
$(document).ready(function ($) {
    let $lateral_menu_trigger = $('#cd-menu-trigger'),
        $close_menu_icon = $('#close-menu-icon'),
        $content_wrapper = $('.cd-main-content'),
        $navigation = $('header');

    $lateral_menu_trigger.add($close_menu_icon).on('click', function (event) {
        event.preventDefault();
        $lateral_menu_trigger.toggleClass('is-clicked');
        $navigation.toggleClass('lateral-menu-is-open');
        $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        });
        $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
    });

    $content_wrapper.on('click', function (event) {
        if (!$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span')) {
            $lateral_menu_trigger.removeClass('is-clicked');
            $navigation.removeClass('lateral-menu-is-open');
            $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
            $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
            //check if transitions are not supported
            if ($('html').hasClass('no-csstransitions')) {
                $('body').removeClass('overflow-hidden');
            }

        }
    });

    $('.item-has-children').children('a').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
    });
});