/** Javascript for the Wine Tasting app.
 * Requires jquery.
 */

// Returns a Promise object
function showPage(page, opts) {

    var showingPage = false;

    var deferred = new $.Deferred();

    $(opts['links'] + ' a').each(function(idx, link) {
        var $link = $(link);
        var href = $link.attr('href');
        var title = $link.text();

        // If this link matches the requested page, load it
        if (page.indexOf(href) > -1) {
            $(opts['target']).load(opts['prefix'] + href, function( response, status, xhr ) {
                if (status == 'error') {
                    $(opts['links']).show();
                    deferred.reject('Error loading ' + href);
                } else {
                    $(opts['links']).hide();
                    $(opts['title']).text(title);

                    // Watch the show-choices div for changes, 
                    // and store in cookie
                    $('.show-choices').bind("DOMSubtreeModified", function(evt) {
                        var $this = $(evt.target);
                        Cookies.set('wine-' + $this.attr('id'), $this.text());
                    });
        
                    deferred.resolve('Showing ' + href);
                }
            });

            // Break out of loop
            showingPage = true;
            return false;
        }
    });

    if (!showingPage) {
        $(opts['links']).show();
        deferred.resolve('Showing index page');
    }

    return deferred.promise();
}

function trackChoices(choices, output, replace) {

    var chosen = [];
    var $choices = $(choices);
    $choices.on('change', function(evt) {

        var $choice = $(evt.target);
        var label = $("label[for='" + $choice.attr('id') + "']").text();

        if (label) {

            if ($choice.is(':checked')) {

                if (replace) {
                    chosen = [];
                }

                // Add the choice to the list
                chosen.push(label);

            } else {
                // Remove the choice from the list
                $(chosen).each(function(idx, choice) {
                    if (choice == label) {
                        chosen.splice(idx, 1);
                        return false;
                    }
                });
            }
        }

        $(output).text(chosen.join(', '));
    });
}

function getChoices(choice_items, show) {

    // Collect the user's choices from the cookies
    var choices = {};
    $(choice_items).each(function(idx, choice) {
        var $choice = $(choice);
        var id = $choice.attr('id');
        var value = Cookies.get('wine-' + id);

        // show them if requested
        if (show) {
            $('#' + id + ' div').html(value);
        }

        choices[id] = value;
    });

    return choices;
}

function getSummary(choices) {


    // Assemble the summary statements
    var statements = [];
    var sidx = 0;

    // First statement involves clarity, colour, and aroma.
    statements[sidx] = '';
    if (choices['clarity-choice']) {
        statements[sidx] = choices['clarity-choice'];
    }
    if (choices['colour-choice']) {
        if (statements[sidx]) statements[sidx] += ' ';
        statements[sidx] += choices['colour-choice'];
    }
    if (statements[sidx]) {
        statements[sidx] += ' hue';
    }
    if (choices['aroma-choice']) {
        var aromas = choices['aroma-choice'].split(',');
        if (aromas.length > 0) {
            if (statements[sidx]) statements[sidx] += ', ';
            statements[sidx] += 'intense ' + aromas[0] + ' nose';

            aromas.splice(0, 1);
            if (aromas.length > 0) {
                statements[sidx] += ', with ' 
                    + aromas.join(', ')
                    + ' odours also present';
            }
        }
    }

    // Second statement involves flavour
    if (statements[sidx]) ++sidx;
    if (choices['flavour-choice']) {
        var flavours = choices['flavour-choice'].split(',');
        if (flavours.length > 0) {
            statements[sidx] = 'prominent ' + flavours[0];

            flavours.splice(0, 1);
            if (flavours.length > 0) {
                statements[sidx] += ', but underlying ' 
                    + flavours.join(', ')
                    + ' flavours';
            } else {
                statements[sidx] += ' flavour';
            }
        }
    }

    // Third statement involves sweetness, feel, body, and finish.
    if (statements[sidx]) ++sidx;
    if (choices['sweet-choice'] || choices['feel-choice']) {
        statements[sidx] = '';
        if (choices['sweet-choice']) {
            statements[sidx] += choices['sweet-choice'];
        }
        if (choices['feel-choice']) {
            if (statements[sidx]) statements[sidx] += ' and ';
            statements[sidx] += choices['feel-choice'];
        }
        if (statements[sidx]) {
            statements[sidx] = 'finish is ' + statements[sidx];
        }
    }
    if (choices['body-choice']) {
        if (statements[sidx]) {
            statements[sidx] += ', with a ';
        } else {
            statements[sidx] = 'has a ';
        }
        statements[sidx] += choices['body-choice'] + ' mouthfeel';
    }

    // Concatenate the statements
    var summary = '';
    for (sidx = 0; sidx < statements.length; ++sidx) {

        var line = statements[sidx];
        if (!line) continue;

        // Capitalise the first word.
        // End with a full stop
        summary += line.charAt(0).toUpperCase() + line.slice(1) + '.<br/>';
    }

    return summary;
}

// http://stackoverflow.com/a/1054862
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}

// Create an accordion from the categorised flavour/aroma choices
function flavourAccordion(target, prefix) {

    // Categorised Flavour and Aroma choices
    var flavour_categories = [//{{{
        { 'berry fruit': [
            'blackberry',
            'blackcurrant',
            'gooseberry',
            'mulberry',
            'raspberry',
            'strawberry'
        ]},
        { 'citrus fruit': [
            'grapefruit',
            'lemon',
            'lime'
        ]},
        { 'dried fruit': [
            'fig',
            'prune',
            'raisin'
        ]},
        { 'tree fruit': [
            'apple',
            'apricot',
            'cherry',
            'nectarine',
            'peach',
            'pear',
            'plum'
        ]},
        { 'tropical fruit': [ 
            'banana',
            'lychee',
            'mango',
            'melon',
            'passionfruit',
            'pineapple'
        ]},
        { 'floral': [ 
            'orange blossom',
            'honeysuckle',
            'perfumed',
            'rose',
            'violet'
        ]},
        { 'fresh vegetal': [
            'capsicum',
            'cut grass',
            'eucalyptus',
            'mint',
            'pea',
            'tomato leaf'
        ]},
        { 'cooked vegetal': [
            'asparagus',
            'green bean',
            'artichoke'
        ]},
        { 'dried vegetal': [
            'straw',
            'herbal',
            'tea',
            'tobacco'
        ]},
        { 'nutty': [
            'almond',
            'cashew',
            'hazelnut',
            'walnut'
        ]},
        { 'woody': [
            'cedar',
            'charred',
            'cigarbox',
            'coffee',
            'oak',
            'pencil shaving',
            'resinous',
            'sawdust',
            'smokey',
            'spicey',
            'vanilla'
        ]},
        { 'spicy': [
            'allspice',
            'black pepper',
            'clove',
            'fennel',
            'ginger',
            'licorice',
            'white pepper'
        ]},
        { 'caramel': [
            'burnt sugar',
            'butterscotch',
            'chocolate',
            'honey',
            'molasses',
            'toffee'
        ]},
        { 'savoury': [
            'bacon',
            'gamey',
            'leather',
            'meaty',
            'musk',
            'nutty',
            'oyster',
            'soy',
            'vegemite'
        ]},
        { 'earthy': [
            'barnyard',
            'dank',
            'dusty',
            'earthy',
            'flinty',
            'forest floor',
            'mouldy',
            'mushroom',
            'musty',
            'wet wood'
        ]},
        { 'yeasty': [
            'bready',
            'buttery',
            'leesy',
            'sweaty',
            'toasty',
            'yeasty'
        ]},
        { 'chemical': [
            'cabbage*',
            'garlic',
            'kerosene',
            'medicinal*',
            'metallic',
            'plastic*',
            'rotten egg*',
            'rubbery',
            'soapy',
            'struck match',
            'tar',
            'wet dog*',
            'wet wool',
        ]},
        { 'oxidised': [
            'bruised apple',
            'dull*',
            'flat*',
            'stale*'
        ]},
        { 'volatile': [
            'nail polish remover',
            'solvent',
            'spiritous',
            'vinegar'
        ]}
    ];//}}}

    // Split the categories across each target element
    var $target = $(target);
    var numTargets = $target.length;
    for (var t = 0; t < numTargets; ++t) {
        var $accordion = $('<dl>', { 'class': 'accordion', 'data-accordion': '' });
        $($target.get(t)).empty().append($accordion);
    }

    var $accordions = $target.find('.accordion');
    $(flavour_categories).each(function(idx, category) {

        var catName = Object.keys(category)[0];
        var catSlug = slugify(catName);
        var catChoices = category[catName];

        var $choices = $('<ul>', { 'class': prefix + 'choices' });
        var hasFaulty = false;
        $(catChoices).each(function(idx, choice) {

            var faulty = choice.charAt(choice.length-1) == '*';
            var choiceClass = '';
            if (faulty) {
                choice = choice.slice(0, choice.length-1);
                choiceClass = "faulty";
                hasFaulty = true;
            }

            $choices.append($('<li>', { 'class': choiceClass })
                .append($('<input>', { 'type': 'checkbox', 'name': prefix+'choices', 'id': prefix+choice, 'value': choice }),
                        $('<label>', { 'for': prefix+choice, 'text': choice })));
        });

        var $catContent = $('<div>', { 'id': catSlug, 'class': 'content' });
        if (hasFaulty) {
            $catContent.append($('<div>', {'class': 'faulty key', 'text': ' = faults' }));
        }
        $catContent.append($choices);

        var $dd = $('<dd>', { 'class': 'accordion-navigation ' + catSlug })
                    .append($('<a>', { 'href': '#' + catSlug })
                        .append($('<h5>', { 'class': 'category', 'text': catName })))
                    .append($catContent);

        $($accordions.get(idx % numTargets)).append($dd);
    });
}
