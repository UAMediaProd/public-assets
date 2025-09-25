$(document).ready(function() {

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

        // Show the main image, and
        // move the subtitle elements inside the main image, attaching them to
        // the modal dialog link.
        //
        // n.b. Simply setting a data-reveal-id on the subtitle and button
        // works the first time, but if you change it, zurb continues to
        // show the first linked modal, not the updated ones.
        $mainImg.prepend($subtitle)
                .show();
    });

    $('.image-reveal').slidereveal();

    // Show the first image on page load
    $('#image-list a:first').trigger('click');
});
