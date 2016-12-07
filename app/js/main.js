$(document).ready(function () {
	$('.bxslider').bxSlider({
	  buildPager: function(slideIndex){
	    switch(slideIndex){
	      case 0:
	        return '<img src="/images/thumbnail.jpg">';
	      case 1:
	        return '<img src="/images/thumbnail2.jpg">';
	      case 2:
	        return '<img src="/images/thumbnail3.jpg">';
	    }
	  }
	});
});