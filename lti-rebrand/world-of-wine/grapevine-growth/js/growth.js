var stages = [
    {
        'group': 0,
        'stage': '1',
        'label': 'Winter bud',
        'image': 'img/EL1.jpg'
    },
    null,
    {
        'group': 0,
        'stage': '3',
        'label': 'Wooly bud',
        'description': 'brown wool visible',
        'image': 'img/EL3.jpg'
    },
    {
        'group': 0,
        'stage': '4',
        'major': 'Budburst',
        'label': 'Green tip',
        'description': 'first leaf tissue visible',
        'image': 'img/EL4.jpg'
    },
    null,
    null,
    {
        'group': 0,
        'stage': '7',
        'label': 'First leaf separated from shoot tip',
        'image': 'img/EL7.jpg'
    },
    null,
    {
        'group': 0,
        'stage': '9',
        'label': '2 to 3 leaves separated',
        'description': 'shoots 2-4 cm long',
        'image': 'img/EL9.jpg'
    },
    null,
    null,
    {
        'group': 0,
        'stage': '12',
        'major': 'Inflorescence clear',
        'label': '5 leaves separated',
        'description': 'shoots about 10 cm long',
        'image': 'img/EL12.jpg'
    },
    null,
    null,
    {
        'group': 0,
        'stage': '15',
        'label': '8 leaves separated',
        'description': 'shoot elongating rapidly; single flowers in compact groups',
        'image': 'img/EL15.jpg'
    },
    null,
    {
        'group': 0,
        'stage': '17',
        'label': '12 leaves separated',
        'description': 'inflorescence well developed; single flowers separated',
        'image': 'img/EL17.jpg'
    },
    null,
    {
        'group': 1,
        'stage': '19',
        'major': 'Flowering begins',
        'label': 'About 16 leaves separated',
        'description': 'first flower caps loosening',
        'image': 'img/EL19.jpg'
    },
    null,
    null,
    null,
    {
        'group': 1,
        'stage': '23',
        'major': 'Full bloom',
        'label': '17-20 leaves separated',
        'description': '50% caps off',
        'image': 'img/EL23.jpg'
    },
    null,
    {
        'group': 1,
        'stage': '25',
        'label': '80% caps off',
        'image': 'img/EL25.jpg'
    },
    null,
    {
        'group': 2,
        'stage': '27',
        'major': 'Setting',
        'label': 'Young berries enlarging (>2 mm diameter)',
        'description': 'bunch at right angles to stem',
        'image': 'img/EL27.jpg'
    },
    null,
    {
        'group': 2,
        'stage': '29',
        'label': 'Berries peppercorn size (4 mm diameter)',
        'description': 'bunches tending downward',
        'image': 'img/EL29.jpg'
    },
    null,
    {
        'group': 2,
        'stage': '31',
        'major': 'Berries pea size',
        'label': '7 mm diameter',
        'description': 'bunches hanging down',
        'image': 'img/EL31.jpg'
    },
    null,
    {
        'group': 2,
        'stage': '33',
        'label': 'Berries still hard and green',
        'image': 'img/EL33.jpg'
    },
    null,
    {
        'group': 3,
        'stage': '35',
        'major': 'Veraison',
        'label': 'Berries begin to colour and enlarge',
        'description': 'berry softening begins; berry colouring begins',
        'image': 'img/EL35.jpg'
    },
    null,
    null,
    {
        'group': 3,
        'stage': '38',
        'major': 'Harvest',
        'label': 'Berries harvest ripe',
        'image': 'img/EL38.jpg'
    },
    null,
    null,
    {
        'group': 4,
        'stage': '41',
        'label': 'After harvest',
        'description': 'cane maturation complete',
        'image': 'img/EL41.jpg'
    },
    null,
    null,
    null,
    null,
    null,
    {
        'group': 4,
        'stage': '47',
        'label': 'End of leaf fall',
        'image': 'img/EL47.jpg'
    },
];

$(document).ready(function() {

    var start = 1;
    var end = start + stages.length - 1;

    var $slider = $('#stages-slider');

    $slider.noUiSlider({
        step: 1,
        animate: false,
        start: start,
        range: {
            min: start,
            max: end
        }
    });


    var stage_numbers = [];
    $(stages).each(function(idx, stage) {

        if (stage) {
            stage_numbers.push(parseInt(stage['stage'], 10));
        }
    });

    $slider.noUiSlider_pips({
        mode: 'values',
        values: stage_numbers,
        density: 2 
    });


    var stage_groups = [];
    $('#stage-groups li').each(function(idx, item) {
        stage_groups.push($(item).text());
    });

    function sliderChange(idx) {

        // If numeric index provided, set the value on the slider.
        //
        // Note: this does not create an event loop, because manually setting
        // the slider value does not invoke this change handler.
        if (typeof(idx) == "number") {
            if (idx < start) {
                idx = start;
            } else if (idx > end) {
                idx = end;
            }
            $slider.val(idx);
        }
        // Otherwise, get the current value from the slider
        else {
            idx = parseInt($slider.val(), 10);
        } 

        // If we've reached an empty stage, use the closest previous stage
        var stage;
        do {
            --idx;
            stage = stages[idx];
        } while (idx > 0 && !stage);

        $('#slider-stage-label').text('EL Stage ' + stage['stage'] + '. ' + stage['label']);
        var description = stage['description'];
        if (!description) description = '';
        $('#slider-stage-description').text(description);

        var major = stage['major'];
        if (!major) major = '';
        $('#slider-stage-major').text(major);

        $('#stage-groups li').removeClass('active');
        $('#stage-groups li:nth-child(' + (stage['group'] + 1) + ')').addClass('active');

        var image = stage['image'];
        if (!image) image = '';
        $('#slider-stage-image').attr('src', image);
    }

    // Start at first stage
    sliderChange(start);

    $slider.on('slide', sliderChange);

    // Attach a click handler to make the slider jump between stages
    $slider.on('mousedown touchstart', function(evt) {

        // Ignore clicks on the actual slider handle
        if ($(evt.target).is('.range-slider-handle')) {
            return true;
        }

        var pageX;
        if ('touches' in evt.originalEvent) {

            // Pass through gesture events
            if (evt.originalEvent.touches.length > 1)
                return true;

            pageX = evt.originalEvent.touches[0].pageX;
        } else {
            pageX = evt.pageX;
        }

        var offsetX = $slider.offset().left;
        var left = pageX - offsetX;
        var width = $slider.width() + 0.0;
        var percentage = left / width;

        var stage = start + Math.round((end - start) * percentage);
        sliderChange(stage);
        return false;
    });

    // Attach the stage-groups click handler
    $('#stage-groups').delegate('li', 'click', function() {
        var $li = $(this);
        var gid = $li.index();

        $(stages).each(function(sid, stage) {
            if (stage && (stage['group'] == gid)) {
                sliderChange(sid+start);
                return false;
            }
        });
    });

    // Allow slider to respond to keyboard arrows
    $(document).on('keydown', function(evt) {

       var idx = $slider.val();

       switch(evt.which) {
            case 37: // left
            case 40: // down
                // decrement slider
                idx--;
                break;

            case 38: // up
            case 39: // right
                // increment slider
                idx++;
                break;

            default: return; // exit this handler for other keys
        }

        sliderChange(idx);
    });

    $(document).foundation({
        reveal : {
            animation : 'fade'
        }
    });

});
