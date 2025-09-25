$(document).ready(function() {


    $(document).foundation({
        reveal : {
            animation : 'fade'
        }
    });

  $('.lazyYT').lazyYT();

    $('#image-list').delegate('a', 'click', function(evt) {

        $('img[usemap]').rwdImageMaps();

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
