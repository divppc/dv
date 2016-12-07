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

	$(".main-slider").bxSlider({
		mode: 'fade',
		auto: true,
		controls: false,
		speed: 1500,
		easing: 'swing'
	});

	$('.less').click(function () {
        var $input = $(this).parent().siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.more').click(function () {
        var $input = $(this).parent().siblings('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".count a").on("click", function(e) {
    	e.preventDefault();
    	$(".popup-bg").fadeIn();
    	$(".calc").fadeIn();
    });

    $(".popup-bg").on("click", function(e) {
    	e.preventDefault();
    	$(".calc").fadeOut();
    	$(this).fadeOut();
    });

    $(".close-popup").on("click", function(e) {
    	e.preventDefault();
    	$(".calc").fadeOut();
    	$(".popup-bg").fadeOut();
    });
});

var html5Slider = document.getElementById('range');

noUiSlider.create(html5Slider, {
	start: [ 3000, 20000 ],
	connect: true,
	range: {
		'min': 300,
		'max': 40000
	}
});
var inputNumber = document.getElementById('to');
var outputNumber = document.getElementById('from');

html5Slider.noUiSlider.on('update', function( values, handle ) {

	var value = values[handle];

	if ( handle ) {
		inputNumber.value = Math.round(value);
	} else {
		outputNumber.value = Math.round(value);
	}
});

outputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function(){
	html5Slider.noUiSlider.set([null, this.value]);
});