'use strict';

$(document).ready(function() {

  function toggleExpanded(show, hide) {
    $('.projects i').toggleClass('fa-chevron-up fa-chevron-down');
    show.slideToggle('slow');
    hide.forEach((item) => {
      item.slideUp('slow');
    })
  }

  $('.box-top-left').click(() => {
    toggleExpanded($('#foodleExpanded'), [$('#quizExpanded', '#budgetrExpanded', '#foodPrepExpanded')]);
  });

  $('#foodleClose').click(() => {
    $('#foodleExpanded').slideUp('slow');
  });

  $('.box-top-right').click(() => {
    toggleExpanded($('#quizExpanded'),[$('#foodleExpanded', '#budgetrExpanded', '#foodPrepExpanded')]);
  });

  $('#quizClose').click(() => {
    $('#quizExpanded').slideUp('slow');
  });

  $('.box-btm-left').click(() => {
    toggleExpanded($('#budgetrExpanded'), [$('#foodleExpanded', '#quizExpanded', '#foodPrepExpanded')]);
  });

  $('#budgetrClose').click(() => {
    $('#budgetrExpanded').slideUp('slow');
  });

  $('.box-btm-right').click(() => {
    toggleExpanded($('#foodPrepExpanded'), [$('#foodleExpanded', '#quizExpanded', '#budgetrExpanded')]);
  });

  $('#foodPrepClose').click(() => {
    $('#foodPrepExpanded').slideUp('slow');
  });

  // nav bar to hamburger
  $('.hamburger').click(() => {
    $('.topnav').toggleClass('responsive');
  });

  // scroll on navbar links
  $('#bio-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#bio-scroll').offset().top)
    },1000);
  });

  $('#projects-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#projects-scroll').offset().top)
    },1000);
  });

  $('#contact-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#contact').offset().top)
    },1000);
  });
});
