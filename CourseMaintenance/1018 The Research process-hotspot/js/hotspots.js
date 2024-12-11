/**
 * Hotspot activity (using map areas)
 *
 * @author S Hastwell
 */

(function() {

	// make the image map responsive
	$('map').imageMapResize();

	// set up listeners for the map areas
    $('map area, .pupi-area-text-alternative')
        .on('mouseleave blur', function(e) {
          var imagesContainer = $(this).closest('.pupi-imagemap-container').find('.pupi-images-container');
          var revealID = $(this).attr('aria-controls');

          $('.'+revealID, imagesContainer).not('.pupi-area-selected-image.active').addClass('hidden');

          // make sure the active selected image is shown (may have been hidden for hover)
          $('.pupi-area-selected-image.active', imagesContainer).removeClass('hidden');
        })
        .on('mouseenter focus', function(e) {
          var imagesContainer = $(this).closest('.pupi-imagemap-container').find('.pupi-images-container');
          var revealID = $(this).attr('aria-controls');

          $('.pupi-area-hover-image', imagesContainer).not('.pupi-area-hover-image.'+revealID).addClass('hidden');
          $('.pupi-area-hover-image.'+revealID, imagesContainer).removeClass('hidden');
          $('.pupi-area-selected-image.'+revealID, imagesContainer).addClass('hidden');
        })
        .on('click', function(e) {
          e.preventDefault();

          var imagesContainer = $(this).closest('.pupi-imagemap-container').find('.pupi-images-container');
          var imagemapElement = $(this).closest('.pupi-imagemap-container');

          var imagemapId = $(this).data('imagemap-id') || '';

          // disable the selected item
          //$('map area, .pupi-area-text-alternative', imagesContainer).not($(this)).css('display', 'block');
          //$(this).css('display', 'none');

          var revealID = $(this).attr('aria-controls');
          //console.log('selected area for: '+revealID);
          if(!revealID || revealID == '' || $('#'+revealID).length == 0) return;

          // show the reveal content
          $('.pupi-reveal-content[data-imagemap-id="'+imagemapId+'"]').not('#'+revealID).addClass('hidden');
          $('.pupi-reveal-content#'+revealID).removeClass('hidden');

          // show the selected image (and hide its hover image)
          $('.pupi-area-hover-image.'+revealID, imagesContainer).addClass('active hidden');
          $('.pupi-area-selected-image.'+revealID, imagesContainer).addClass('active').removeClass('hidden');

          $('[aria-selected][data-imagemap-id="'+imagemapId+'"]', imagemapElement).not($(this)).attr('aria-selected', false);
          $(this).attr('aria-selected', true);

          // hide any other selected images
          $('.active[data-imagemap-id="'+imagemapId+'"]', imagemapElement).not($('.'+revealID, imagesContainer)).removeClass('active').not('.pupi-image-marker').addClass('hidden');

					resizeIframe();
        });

	// set up listeners for hotspot markers
	$('.pupi-image-marker').on('click', function(e) {
		e.preventDefault();

		var imagesContainer = $(this).closest('.pupi-imagemap-container').find('.pupi-images-container');

		$('.pupi-hotspot-marker', imagesContainer).not($(this)).removeAttr('disabled');
		$(this).attr('disabled', 'disabled');

		var imagemapId = $(this).data('imagemap-id') || '';

		var revealID = $(this).attr('aria-controls');
		console.log('selected marker for: '+revealID);
		if(!revealID || revealID == '' || $('#'+revealID).length == 0) return;

		$('.pupi-reveal-content[data-imagemap-id="'+imagemapId+'"]').not('#'+revealID).addClass('hidden');
		$('.pupi-reveal-content#'+revealID).removeClass('hidden');

		$('[aria-selected][data-imagemap-id="'+imagemapId+'"]', imagesContainer).not($(this)).attr('aria-selected', false)
		$(this).attr('aria-selected', true).addClass('active');

		$('.active[data-imagemap-id="'+imagemapId+'"]', imagesContainer).not($(this)).removeClass('active').not('.pupi-image-marker').addClass('hidden');

		resizeIframe();
	});

	function resizeIframe() {
		// post a message with the current content height
		var contentHeight = $('body').height()+20;
		//console.log('resize: '+contentHeight);

		// msg for Canvas
		var msgCanvas = JSON.stringify( {subject:"lti.frameResize",height:contentHeight} );
		window.parent.postMessage(msgCanvas, '*');

		// msg for Moodle
		var msgMoodle = {subject:"lti.frameResize",height:contentHeight,context:"h5p",scrollHeight:contentHeight,action:'resize'};
		window.parent.postMessage(msgMoodle, '*');
	}

	window.onresize = function() {
		resizeIframe();
	}

	setTimeout(function() {
		resizeIframe();
	}, 500)

})();
