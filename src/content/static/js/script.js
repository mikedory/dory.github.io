
/*
Portfolio page
*/

(function() {
  var colorizeRollover, hideAndShow, log, unColorizeRollover;

  $(".project-sort-buttons li a.clickable").click(function() {
    var classToShow;
    if ($(this).closest('li a').hasClass('clickable')) {
      classToShow = $(this).closest('li').attr('class').split(' ')[0];
      hideAndShow(this, classToShow);
    } else {

    }
    return false;
  });

  $(".post-group-all h1 a.clickable").click(function() {
    var classToShow;
    if ($(this).hasClass('clickable')) {
      classToShow = $(this).closest('h1').attr('class').split(' ')[0];
      $('.project-sort-buttons li.' + classToShow + ' a').tab('show');
      hideAndShow(this, classToShow);
    } else {

    }
    return false;
  });

  $('.bwrollover').hover(function() {
    return colorizeRollover(this);
  }, function() {
    return unColorizeRollover(this);
  });

  $('.project-sort-buttons.li:first a').removeClass('clickable');

  hideAndShow = function(div, classToShow) {
    var _this = this;
    $('.post-group').hide();
    $(div).closest('ul').each(function(index, element) {
      $(element).find('li').removeClass('active');
      return $(element).find('li a').addClass('clickable');
    });
    $(div).closest('li').addClass('active');
    $(div).closest('li a').removeClass('clickable');
    return $('.' + classToShow).fadeIn(150);
  };

  colorizeRollover = function(div) {
    $(div).find('img.gray').hide();
    return $(div).find('img.color').show();
  };

  unColorizeRollover = function(div) {
    $(div).find('img.color').hide();
    return $(div).find('img.gray').show();
  };

  /*
  Helper functions
  */

  log = function(msg) {
    if (console) {
      return console.log(msg);
    } else {

    }
  };

}).call(this);
