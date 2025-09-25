$(document).ready(function() {
    var baseuri = location.protocol + '//' + location.hostname;
    var content = [
        { title: "Grapevine Anatomy",
          src: baseuri + "/world.of.wine/anatomy/",
          width: 800,
          height: 820
        },
        { title: "Grapevine Growth",
          src: baseuri + "/world.of.wine/growth/",
          width: 800,
          height: 720
        },
        { title: "Wine Production Process",
          src: baseuri + "/world.of.wine/process/",
          width: 800,
          height: 1210
        },
        { title: "Wine Centre: Make Your Own Wine (full size)",
          src: baseuri + "/world.of.wine/myow/",
          width: 1285,
          height: 1025
        },
        { title: "Wine Centre: Make Your Own Wine (small)",
          src: baseuri + "/world.of.wine/myow/",
          scale: 0.625,
          width: 1285,
          height: 1025
        },
        { title: "Wine Tasting : 0. Index",
          src: baseuri + "/world.of.wine/tasting/index.html",
          width: 800,
          height: 550
        },
        { title: "Wine Tasting : 1. Color",
          src: baseuri + "/world.of.wine/tasting/colour.html",
          width: 800,
          height: 860
        },
        { title: "Wine Tasting : 2. Clarity",
          src: baseuri + "/world.of.wine/tasting/clarity.html",
          width: 800,
          height: 500
        },
        { title: "Wine Tasting : 3. Aroma",
          src: baseuri + "/world.of.wine/tasting/aroma.html",
          width: 800,
          height: 700
        },
        { title: "Wine Tasting : 4. Flavour",
          src: baseuri + "/world.of.wine/tasting/flavour.html",
          width: 800,
          height: 700
        },
        { title: "Wine Tasting : 5. Texture",
          src: baseuri + "/world.of.wine/tasting/texture.html",
          width: 800,
          height: 1250
        },
        { title: "Wine Tasting : 6. Summary",
          src: baseuri + "/world.of.wine/tasting/summary.html",
          width: 800,
          height: 150
        },
        { title: "Winery Tour",
          src: baseuri + "/world.of.wine/winery-map/",
          width: "100%",
          height: 1050
        },
    ];

    CourseUnits.show(content, 'World of Wine : Interactives');
});
