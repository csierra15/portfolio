'use strict';

$(document).ready(function() {

  $('.box-top-left').click(() => {
    $('#foodleExpanded').slideToggle('slow');
    $('#quizExpanded', '#budgetrExpanded', '#foodPrepExpanded').hide();
  });

  $('#foodleClose').click(() => {
    $('#foodleExpanded').slideUp('slow');
  });

  $('.box-top-right').click(() => {
    $('#quizExpanded').slideToggle('slow');
    $('#foodleExpanded', '#budgetrExpanded', '#foodPrepExpanded').hide();
  });

  $('#quizClose').click(() => {
    $('#quizExpanded').slideUp('slow');
  });

  $('.box-btm-left').click(() => {
    $('#budgetrExpanded').slideToggle('slow');
    $('#foodleExpanded', '#quizExpanded', '#foodPrepExpanded').hide();
  });

  $('#budgetrClose').click(() => {
    $('#budgetrExpanded').slideUp('slow');
  });

  $('.box-btm-right').click(() => {
    $('#foodPrepExpanded').slideToggle('slow');
    $('#foodleExpanded', '#quizExpanded', '#budgetrExpanded').hide();
  });

  $('#foodPrepClose').click(() => {
    $('#foodPrepExpanded').slideUp('slow');
  });

  $('.hamburger').click(() => {
    $('.topnav').toggleClass('responsive');
  });
})
