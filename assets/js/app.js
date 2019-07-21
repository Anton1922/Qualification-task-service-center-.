$(document).ready(function() {

/*****************
ACCORDION SERVICE
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
ROTATE ARROW IN SERVICE
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
 MOBILE/TABLET MENU
***********************/

 //OPEN

  var $jsNavButton = $('.js-navigation-button');
  var $jsHiddenMenu = $('.js-hidden-menu');
  var $jsNavButtonClose = $('.js-navigation-button--close');

  $jsNavButton.click(function(e) {

    e.preventDefault();

    $jsHiddenMenu.css('display', 'block');    

    /*if ($jsHiddenMenu.hasClass('show')) {
      $jsHiddenMenu.removeClass('show');
      $jsHiddenMenu.hide();
    } else {
        $jsHiddenMenu.addClass('show');
        $jsHiddenMenu.show();
    }*/

  });

 //CLOSE

  $jsNavButtonClose.click(function(e) {

    e.preventDefault();

    $jsHiddenMenu.css('display', 'none');

  });

/********************************************
CHANGE NAVIGATION BACKGROUND WITH PAGE SCROLL
*********************************************/

  var $jsNavigation = $('.js-navigation');

  $(window).on("scroll", function() {

    if($(window).scrollTop() > 10) {
        $jsNavigation.addClass("scroll-background");
    } else {
       $jsNavigation.removeClass("scroll-background");
    }
  });

  /********
  ARROW UP
  *********/
  var $jsArrowUp = $('.js-arrow-up');

  //SHOW/HIDE BY SCROLL

  $(window).scroll(function() {

    if($(window).scrollTop() > 300) {
        $jsArrowUp.fadeIn(200);
    } else {
       $jsArrowUp.fadeOut(200);
    }
  });

  //UP BY CLICK

  $jsArrowUp.click(function() {
 
    $('body,html').animate({scrollTop: 0}, 1000);
 
  });

  /********
  PARALLAX
  *********/

  //var scene = document.getElementById('scene');
  //var parallaxInstance = new Parallax(scene);

});
