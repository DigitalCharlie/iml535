$(function() {

/* SCROLL WORKING */

  var showText = function(selector) {
    $(selector).css('display', 'block');
    setTimeout(function() {
      $(selector).css('opacity', 1);
    }, 150);
  };

  var hideText = function(selector) {
    $(selector).css('display', 'none');
    setTimeout(function() {
      $(selector).css('opacity', 0);
    }, 150);
  };

/* Start */

  setTimeout(function(){
    showText('#1');
    setTimeout(function(){
      hideText('#1');
    }, 7000);
  }, 3000);



});
