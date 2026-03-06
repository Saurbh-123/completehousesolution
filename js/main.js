// loader start 
window.addEventListener("load", function(){
    const loader = document.getElementById("loader");
    loader.classList.add("hide");
});

// slider
$(document).ready(function(){
    $('.hero-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Loader hide
    $(window).on('load', function(){
        $('#loader').addClass('hide');
    });
});



$(document).ready(function(){

  $('#services #veg').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 }
    }
    ]
  });

  $('#recipe_home #nonveg').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 }
    }
    ]
  });

});


$(document).ready(function(){

    function moveIndicator(element){
        var $el = $(element);
        var left = $el.position().left;
        var width = $el.outerWidth();

        $('.tab-indicator').css({
            width: width + 'px',
            left: left + 'px'
        });
    }

    // Initial Position
    moveIndicator($('.tab-btn.active'));

    $('.tab-btn').click(function(){

        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        var tab_id = $(this).data('tab');

        $('.tab-content').removeClass('active');
        $('#' + tab_id).addClass('active');

        moveIndicator(this);
    });

});



document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav").classList.toggle("active");
});


 new WOW().init();