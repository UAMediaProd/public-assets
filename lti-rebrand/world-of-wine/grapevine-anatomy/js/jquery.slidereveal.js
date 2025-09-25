/*!
 jQuery Slide Reveal

 @copyright 2014, University of Adelaide
 @author Jill Vogel <jill.vogel@adelaide.edu.au>
 @license MIT License <http://en.wikipedia.org/wiki/MIT_License>
 @version 1.0.0

 Options
   - cursor    : 'cw-cursor' : cursor to show during mouse reveal
   - initial   : '50%' : initial reveal percent
   - gui-class : 'slidereveal-gui' : indicates that a gui should be added with the given class
   - gui-fa    : ['fa-caret-left', 'fa-caret-right'] : font-awesome elements to add to gui.  other e.g. 'fa-arrows-h'

 Example usage:

    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery.slidereveal.css" />
    <script lang="text/javascript" src="js/vendor/jquery.js"></script>
    <script lang="text/javascript" src="js/jquery.slidereveal.js"></script>

    <div class="image-reveal">
        <a href="img/revealed.jpg"><img src="img/main.jpg" /></a>
    </div>

    <script>
        $('.image-reveal').slidereveal({'gui-fa': 'fa-arrows-h'});
    </script>

    <style>
        .image-reveal {
            width: 255px;
            height: 202px;
            margin: 10px;
        }
    </style>

 Dependencies
   - jquery
   - fontawesome css and fonts

 TODO
   - Allow right-to-left reveal
   - Make FontAwesome dependency optional
 */
(function($) {

    var $revealing = null;
    var opt = {};

    $.fn.slidereveal = function(options) {
        // Extend our default options with those provided.
        // Note that the first argument to extend is an empty
        // object – this is to keep from overriding our "defaults" object.
        opt = $.extend( {}, $.fn.slidereveal.defaults, options );

        this.each(function(idx, wrapper) {

            var $wrapper = $(wrapper);

            // Set default CSS properties
            $wrapper.css('position', 'relative')
                    .css('overflow', 'hidden');

            // Find the a link contained in $wrapper
            var $a = $wrapper.find('a');
            if ($a && $a.attr('href')) {

                // Disable click handler
                $a.on('click touchstart touchend', function() {
                    return false;
                });

                // Embed a hidden div with the target as a background image
                var href = $a.attr('href');
                var $div = $('<div>').css('background-image', 'url("' + href + '")')
                                     .css('background-repeat', 'no-repeat')
                                     .css('overflow', 'hidden');
                $wrapper.append($div);
            }

            // Add GUI if requested
            var $gui;
            if (opt['gui-class']) {
                $gui = $('<div>', {'class': opt['gui-class']});
                $gui.css('overflow', 'visible');

                if (opt['gui-fa']) {
                    var fa = opt['gui-fa'];
                    if (typeof fa != 'object') {
                        fa = [fa];
                    }

                    for(var f = 0; f < fa.length; ++f) {
                        $gui.append($('<i>', { 'class': 'fa ' + fa[f] }));
                    }
                }
                $wrapper.append($gui);
            }

            $wrapper.find('div')
                .css('position', 'absolute')
                .css('top', 0)
                .css('bottom', 0)
                .css('left', 0)
                .css('right', opt['initial']);

            $wrapper.on('mousedown touchstart', function(evt) {
                if ('touches' in evt.originalEvent) {
                    // Pass through gesture events
                    if (evt.originalEvent.touches.length > 1)
                        return true;
                }

                $revealing = $(evt.currentTarget);

                // stop reveal on mouseup/touchend
                $(document).on('mouseup touchend', stop_reveal);

                return reveal(evt);
            });
            $wrapper.on('mousemove touchmove', reveal);
        });
    };

    $.fn.slidereveal.defaults = {
        'cursor': 'ew-cursor',
        'initial': '50%',
        'gui-class': 'slidereveal-gui',
        'gui-fa': ['fa-caret-left', 'fa-caret-right']
    };

    function reveal(evt) {
        if (!$revealing)
            return true;

        var pageX;
        if ('touches' in evt.originalEvent) {

            // Pass through gesture events
            if (evt.originalEvent.touches.length > 1)
                return true;

            pageX = evt.originalEvent.touches[0].pageX;
        } else {
            pageX = evt.pageX;
        }

        var offsetX = $revealing.offset().left;
        var left = pageX - offsetX;
        var width = $revealing.width() + 0.0;
        var percentage = left / width;
        var right = 100 - (100.0 * percentage);

        $revealing.find('div').css('right', right + '%');
        if (opt['cursor']) {
            $revealing.css('cursor', opt['cursor']);
        }
        return false;
    }

    function stop_reveal(evt) {
        if ($revealing) {
            $revealing.css('cursor', 'auto');
            $revealing = null;

            $(evt.currentTarget).off(evt.type, stop_reveal);
        }
        return true;
    }
}( jQuery ));
