require(["jquery", "jquery/ui", "slick"], function ($) {
    $(document).ready(function () {
        $(".slick-slider").slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
        });
    });
});
