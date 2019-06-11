$(document).ready(function() {

/*****************
Accordion SERVICE
*****************/

  var $jsServiceDevice = $(".js-service-device");
  var $jsServiceList = $(".js-service-list");

  $jsServiceDevice.click(function(e) {
    
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find($jsServiceList).removeClass('show');
        $this.parent().parent().find($jsServiceList).slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }

  });


  /*$jsServiceDevice.click(function(e) {
    
    e.preventDefault();

    let $this = $(this);

    $this.next('.service__arrow').toggleClass('trans');

    if ($('.service__arrow').hasClass('trans')) {
      $this.next('.service__arrow-icon').css('abc', 'rotate(180deg)');
    }

  });*/

});
