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
    }, 3000);
  }, 2000);

  setTimeout(function(){
    showText('#2');
    setTimeout(function(){
      hideText('#2');
    }, 3000);
  }, 5500);

  setTimeout(function(){
    showText('#3');
    setTimeout(function(){
      hideText('#3');
    }, 5000);
  }, 9000);

  setTimeout(function(){
    showText('#4');
    setTimeout(function(){
      hideText('#4');
    }, 5000);
  }, 14500);

    setTimeout(function(){
    showText('#5');
    setTimeout(function(){
      hideText('#5');
    }, 5000);
  }, 20000);

  setTimeout(function(){
    showText('#6');
    setTimeout(function(){
      hideText('#6');
    }, 5000);
  }, 25500);

  setTimeout(function(){
    showText('#7');
    setTimeout(function(){
      hideText('#7');
    }, 12000);
  }, 31000);

  setTimeout(function(){
    showText('#8');
    setTimeout(function(){
      hideText('#8');
    }, 5000);
  }, 43500);

  setTimeout(function(){
    showText('#9');
    setTimeout(function(){
      hideText('#9');
    }, 9000);
  }, 49000);

  setTimeout(function(){
    showText('#10');
    setTimeout(function(){
      hideText('#10');
    }, 4000);
  }, 58500);

  setTimeout(function(){
    showText('#11');
    setTimeout(function(){
      hideText('#11');
    }, 5500);
  }, 63000);

  setTimeout(function(){
    showText('#12');
    setTimeout(function(){
      hideText('#12');
    }, 9500);
  }, 69000);

  setTimeout(function(){
    showText('#14');
    setTimeout(function(){
      hideText('#14');
    }, 4000);
  }, 79000);

  setTimeout(function(){
    showText('#15');
    setTimeout(function(){
      hideText('#15');
    }, 4000);
  }, 83500);

  setTimeout(function(){
    showText('#16');
    setTimeout(function(){
      hideText('#16');
    }, 5000);
  }, 88000);

  setTimeout(function(){
    showText('#17');
    setTimeout(function(){
      hideText('#17');
    }, 5500);
  }, 93500);

  setTimeout(function(){
    showText('#18');
    setTimeout(function(){
      hideText('#18');
    }, 6500);
  }, 99500);

  setTimeout(function(){
    showText('#19');
    setTimeout(function(){
      hideText('#19');
    }, 5500);
  }, 106500);

  setTimeout(function(){
    showText('#20');
    setTimeout(function(){
      hideText('#20');
    }, 5500);
  }, 112500);

  setTimeout(function(){
    showText('#21');
    setTimeout(function(){
      hideText('#21');
    }, 5500);
  }, 118500);

  setTimeout(function(){
    showText('#22');
    setTimeout(function(){
      hideText('#22');
    }, 5500);
  }, 124500);

  setTimeout(function(){
    showText('#23');
    setTimeout(function(){
      hideText('#23');
    }, 5500);
  }, 130500);

  setTimeout(function(){
    showText('#24');
    setTimeout(function(){
      hideText('#24');
    }, 5500);
  }, 136500);


  setTimeout(function(){
    showText('#25');
    setTimeout(function(){
      hideText('#25');
    }, 5500);
  }, 142500);

});
