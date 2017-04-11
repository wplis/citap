$(function() {
  var img = $('.cat-img');
  var i = 1;

  var interval = setInterval(function() {
    if (i > 500) clearInterval(interval);

    i += 5;
    img.css({width: i, height: i});
  }, 25);

});