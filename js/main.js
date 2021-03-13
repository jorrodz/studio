$(document).ready(function() {
	  
    // Initialize WOW

    new WOW().init();
    

// Close The Hamburguer Icon on Click

    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
   });
  });
  

//  Back to Top Button

   $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
   });

   $(document).ready(function() {
   $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 2000);
    return false;
   });

   $('#back-to-top').tooltip('show');
   });
   

  // Smooth Scrolling
  
   $(document).ready(function(){
     let scroll_link = $('.scroll');
      scroll_link.click(function(e){
          e.preventDefault();
          let url = $('body').find($(this).attr('href')).offset().top;
          $('html, body').animate({
            scrollTop : url
          },1000);
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
          return false;	
       });
    });

 