'use strict';

$(document).ready(function() {

  function toggleExpanded(show, hide) {
    $('.box i').toggleClass('fa-chevron-up fa-chevron-down');
    $('.box').toggleClass('details')
    show.toggle('slow');
    hide.forEach((item) => {
      item.toggle('slow');
    })
  }

  $('.box-top-left').click(() => {
    toggleExpanded($('#foodleExpanded'), [$('.box-top-right'), $('.box-btm-left'), $('.box-btm-right')]);
  });

  $('#foodleClose').click(() => {
    toggleExpanded($('#foodleExpanded'), [$('.box-top-right'), $('.box-btm-left'), $('.box-btm-right')]);
  });

  $('.box-top-right').click(() => {
    toggleExpanded($('#quizExpanded'),[$('.box-top-left'), $('.box-btm-left'), $('.box-btm-right')]);
  });

  $('#quizClose').click(() => {
    toggleExpanded($('#quizExpanded'),[$('.box-top-left'), $('.box-btm-left'), $('.box-btm-right')]);
  });

  $('.box-btm-left').click(() => {
    toggleExpanded($('#budgetrExpanded'), [$('.box-top-right'), $('.box-top-left'), $('.box-btm-right')]);
  });

  $('#budgetrClose').click(() => {
    toggleExpanded($('#budgetrExpanded'), [$('.box-top-right'), $('.box-top-left'), $('.box-btm-right')]);
  });

  $('.box-btm-right').click(() => {
    toggleExpanded($('#foodPrepExpanded'), [$('.box-top-right'), $('.box-top-left'), $('.box-btm-left')]);
  });

  $('#foodPrepClose').click(() => {
    toggleExpanded($('#foodPrepExpanded'), [$('.box-top-right'), $('.box-top-left'), $('.box-btm-left')]);
  });

  // nav bar to hamburger
  $('.hamburger').click(() => {
    $('.topnav').toggleClass('responsive');
  });

  // scroll on navbar links
  $('#top-of-page').click(() => {
    $('html, body').animate({
      scrollTop: ($('html').offset().top)
    },1000);
  });

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
