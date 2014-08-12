$(document).ready(function(){
		$('html, body').css('opacity', 0);
		$('html, body').fadeTo(1000,1);
		
		(function($) {    
			var allPanels = $('.accordion > dd').hide();
    
			$('.accordion > dt > a').click(function() {
		    allPanels.slideUp().removeClass('active');
		    $('.accordion > dt > a').removeClass('active');
		    $(this).parent().next().slideDown().addClass('active');
		    $(this).addClass('active');
		    return false;
		  });
		  })(jQuery);
		  
		  //PUNTOS DE VENTA TOGGLE POR ESTADO
		  $('.estado').click(function(){
		  	  $('.estado').siblings('div').slideUp();
			  $(this).next().slideToggle();			  
		  });
		  
});