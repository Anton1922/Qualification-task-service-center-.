$(document).ready(function() {

/*****************
Accordion SERVICE
*****************/
  var $jsServiceDevice = $('.js-service-device');
  var $jsServiceList = $('.js-service-list');
  var $jsServiceArrow = $('.js-service-arrow');
  var jsServiceArrowIcon = $('.js-service-arrow-icon');

  $jsServiceDevice.click(function(e) {
    
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $
    } else {
        $this.parent().parent().find($jsServiceList).removeClass('show');
        $this.parent().parent().find($jsServiceList).slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }

  });

/***********************
 Rotate Arrow in SERVICE
***********************/

  $jsServiceDevice.click(function(e) {

    e.preventDefault();

    let $this = $(this);

    if ($this.children().children(jsServiceArrowIcon).hasClass('active')) {
      $this.children().children(jsServiceArrowIcon).removeClass('active');
    } else { 
      $this.parent().parent().find(jsServiceArrowIcon).removeClass('active');
      $this.children().children(jsServiceArrowIcon).toggleClass('active');
    }

  });

/***********************
 Mobile/Tablet Menu
***********************/
/******
 OPEN
******/

var $jsNavButton = $('.js-navigation-button');
var $jsHiddenMenu = $('.js-hidden-menu');
var $jsNavButtonClose = $('.js-navigation-button--close');

$jsNavButton.click(function(e) {

    e.preventDefault();

    $jsHiddenMenu.css('display', 'block');

  });

/******
 CLOSE
******/

$jsNavButtonClose.click(function(e) {

    e.preventDefault();

    $jsHiddenMenu.css('display', 'none');

  });

});
