$(document).ready(function() {

  //responsive image-map script
  $('img[usemap]').rwdImageMaps();

  //rollover highlighting script for image map
  $('#winery').maphilight();

  //lazy loading script
  $('.lazyYT').lazyYT();

    $(document).foundation({
        reveal : {
            animation : 'fade'
        }
    });

    $('#image-list').delegate('a', 'click', function(evt) {

        var $this = $(evt.currentTarget);

        // Deactivate the other images in the list
        $('#image-list img').removeClass('active');

        // Activate this one
        $this.find('img').addClass('active');

        var title = $this.find('img').attr('alt');

        // Change main image
        $('.main-image-wrapper .img').hide();
        var mainImgId = $this.attr('main-image-id');
        var $mainImg;
        var $subtitle = $('#buttonLink, #subtitle');
        if (mainImgId) {
            $mainImg = $('#' + mainImgId);
            $mainImg.attr({
                'alt' : title
            });

            // Change subtitle text
            $('#subtitle').text(title);
            $subtitle.removeClass('hidden');

        } else {
            $mainImg = $('.main-image-wrapper .img.default');
            $subtitle.addClass('hidden');
        }

        // Show the main image
        $mainImg.show();
    });

    // Show the first image on page load
    $('#image-list a:first').trigger('click');

});

jQuery(document).ready(function($){
	$('img[usemap]').maphilight();
	$('img[usemap]').rwdImageMaps();
});


jQuery(window).bind('resize', function(e)
{
    window.resizeEvt;
    jQuery(window).resize(function()
    {
        clearTimeout(window.resizeEvt);
        window.resizeEvt = setTimeout(function()
        {
            jQuery('img[usemap]').maphilight();
        }, 250);
    });
});
