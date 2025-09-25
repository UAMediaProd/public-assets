var locX = 0;
var locY = 0;

var fo = 500;
var fi = 2000;

var autoReset = false;
var timerDelay=180000;
var screenTimer=null;
var endTimer=null;
var istouch=false;

var scrHeight = 1020;
var scrWidth = 1280;

var gameData;
var resultData;
var medalData;

var pageon;
var mapon;
var cultivarid;
var cultivar;
var curScreen;
var curAnswer;
var score;

var wrongAns;
var wrong;

var executing = false;

// Shortened url for this host
var SHORT_URL_SEP = '.';
var SHORT_URL;
if (window.location.hostname.indexOf('lti-adx.adelaide.edu.au') >= 0) {
    SHORT_URL = 'https://bit.ly/1tx4Lx6';    
} else if (window.location.hostname.indexOf('loco.services.adelaide.edu.au') >= 0) {
    SHORT_URL = 'https://bit.ly/1BbDIPU';
} else {
    // If we're not being hosted on server with a short url,
    // just use the current url
    SHORT_URL = window.location.protocol + '//' + window.location.hostname + window.location.pathname;
}

var ie = (function(){
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());


$( document ).ready(function(){
    init();

    //showFullScreen() ;

    showPage();
});

// Show the page determined by the current location hash.
// If no valid page found, then returns false, and does not change the current screen.
function showPage() {

    if (window.location.hash) {
        var params = window.location.hash.substring(1);
        var pageInfo = params.split(SHORT_URL_SEP);

        // cultivar id
        var cid = parseInt(pageInfo[0]);
        if (!isNaN(cid) && (cid >= 0) && (cid < gameData.length)) {

            // screen id
            var sid = parseInt(pageInfo[1]);
            if (!isNaN(sid) && (sid >= 0) && (sid < gameData[cid]['screens'].length)) {

                // score
                var scr = parseInt(pageInfo[2]);
                if (!isNaN(scr)) {

                    start();

                    cultivarid = cid;
                    curScreen = sid;
                    score = scr;

                    // If we're showing the final score, don't animate fade in/out
                    if (sid == gameData[cid]['screens'].length - 1) {
                        fo = 0;
                        fi = 0;
                    }

                    showscreen(cid);
                    return true;
                }
            }
        }
    }

    return false;
}

// Construct the URL for the current page
function sharePageUrl() {

    var url = SHORT_URL;
    var cid = cultivarid;
    if (!isNaN(cid) && (cid >= 0) && (cid < gameData.length)) {

        // screen id
        var sid = curScreen;
        if (!isNaN(sid) && (sid >= 0) && (sid < gameData[cid]['screens'].length)) {

            // score
            var scr = score;
            if (!isNaN(scr)) {
                // n.b we prefix the hash with a ? because Facebook drops hashes otherwise.
                return SHORT_URL + '?#' + [cid, sid, scr].join(SHORT_URL_SEP);
            }
        }
    }

    return null;
}

function hideSharePage() {
    $('#share-wrapper *').off();
    $('#share-wrapper').hide();
    return false;
}

function sharePage() {

    var pageAttr = getStyleForCultivar(cultivarid);
    var shareUrl = sharePageUrl();
    $('#share-modal').attr('class', pageAttr['color1'])
    var $shareLink = $('#share-modal .share-link');
    $shareLink.attr('value', shareUrl)
        .on('click', function() { $(this).select(); });
    $('#share-wrapper .modal-mask').on('click', hideSharePage);
    $('#share-wrapper .modal-close').on('click', hideSharePage);
    $('#share-wrapper').show();
}

function showFullScreen() {
     if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

function init() {
    pageon = false;
    mapon = false;
    loadViews();
    hide("screen");
    show("container");
       getData();
}

function start() {
    $("#screen").fadeIn(fi);
    hide("container");
    resetTimer();
}

function resetApp() {
    hideViews();
    hide("screen");
    $("#container").fadeIn(300);
}

function hideViews() {
    document.body.style.background = "#555e9b";
    if (document.getElementById("activity")) {hide("activity");};
    if (document.getElementById("hint")) {hide("hint");};
    if (document.getElementById("map")) {hide("map");};
    if (document.getElementById("hintbutton")) {hide("hintbutton");};
    if (document.getElementById("nexthint")) {hide("nexthint");};
}
function loadViews() {
    hideViews();
}

function showCredits() {
    if (!pageon) {
        pageon = true;
        $('#game').fadeOut(fo, function() {
            $('#game').css("background-image", "url(images/back_credits.png)");
            $('#credit-links').show();
            $('#game').fadeIn(fi);
        });
        document.getElementById("credits").innerHTML = "<span>Back</span>";
    } else {
        pageon = false;
        $('#game').fadeOut(fo, function() {
            $('#game').css("background-image", "url(images/back_main.png)");
            $('#credit-links').hide();
            $('#game').fadeIn(fi);
        });
        document.getElementById("credits").innerHTML = "<span>Credits</span>";
    }
    resetTimer();
}
function startagain() {
    if(endTimer)clearTimeout(endTimer);

    hide("hintbutton");
    hide("hint");
    hide("map");
    hide("nexthint");
    pageon = false;
    mapon = false;

    var str = '<div id="question" class="blackText"></div><div class="cultivars"><div class="selectcultivar" onClick="startgame(0)"></div><div class="selectcultivar" onClick="startgame(1)"></div><div class="selectcultivar" onClick="startgame(2)"></div><div class="selectcultivar" onClick="startgame(3)"></div></div><div id="credits" class="whiteText" onClick="showCredits()"><span>Credits</span></div>';
    //document.getElementById("menu").style.backgroundImage="url(images/backleft.png)";

    $('#game').fadeOut(fo, function() {
        document.body.style.background = "#555e9b";
            $('#game').css("background-image", "url(images/back_main.png)");
            $('#game').html('<div id="hint"></div><div id="map"></div><div id="gameback" class="fullheight"></div><div id="hintbutton" onClick="showhint()"></div><div id="nexthint" onClick="nexthint()"></div>');
            $('#game').fadeIn(fi);
    });
    $('#menu').fadeOut(fo, function() {
            $('#menu').css("background-image", "url(images/backleft.png)");
            $('#menu').html(str);
            $('#menu').fadeIn(fi);
    });

    resetTimer();
}
function startgame(c) {
    cultivarid = c;
    curScreen = 0;
    score = 0;
    wrongAns = -1;
    wrong = 0;

    showscreen(cultivarid);

    cultivar = gameData[c]['name'];

    $('body').removeClass('riesling');
    $('body').removeClass('cabernet');
    $('body').removeClass('shiraz');
    $('body').removeClass('chardonnay');
    $('body').addClass(cultivar);
}
function answer(ans) {
    curAnswer = ans;
    if (ans == 0) {
        $('#selecta').addClass('on');
        $('#selectb').removeClass('on');
        $('#selectc').removeClass('on');
    } else if (ans == 1) {
        $('#selecta').removeClass('on');
        $('#selectb').addClass('on');
        $('#selectc').removeClass('on');
    } else if (ans == 2) {
        $('#selecta').removeClass('on');
        $('#selectb').removeClass('on');
        $('#selectc').addClass('on');
    }

    document.getElementById("next").style.opacity="1";
    document.getElementById("next").style.cursor="pointer";
    loopNextButton();
}


function loopNextButton() {
    var $element = $('#nexticon');
    setInterval(function () {
        $element.animate({opacity: 0.4},500, function () {
            $element.animate({opacity: 1},500);
        });
    }, 1000);

}

function getStyleForCultivar(cid) {

    var clr = "blackText";
    var clr2 = "yellowText";
    var background = "#877a01";
    if (cid==1 || cid==3) {
        background = "#501814";
        clr = "pinkText";
        clr2 = "whiteText"; 
    }

    return {
        'color1': clr,
        'color2': clr2,
        'background': background
    };
}

function nextscreen() {
    if (curAnswer >=0) {
        var selscore = parseInt(gameData[cultivarid]['screens'][curScreen]['answers'][curAnswer]['score'])
        score += selscore;
        if (selscore <= wrong) {
            wrongAns = curScreen;
            wrong = selscore;
        }
        curScreen ++;
        document.getElementById("next").style.opacity="0.1";
        document.getElementById("next").style.cursor="none";
        showscreen(cultivarid);
    }
}
function showscreen(c) {

    curAnswer = -1;
    cultivar = gameData[c]['name'];
    pageon = mapon = false;

    $('#hint').fadeOut(fo);
    $('#map').fadeOut(fo);
    $('#nexthint').fadeOut(fo);

    var pageAttr = getStyleForCultivar(c);

    var clr = pageAttr['color1'];
    var clr2 = pageAttr['color2'];
    var clr2 = pageAttr['color2'];
    document.body.style.background = pageAttr['background'];

    var str = "<div id='title' class='"+clr+"'>"+(curScreen+1)+": "+gameData[c]['screens'][curScreen]['title']+"</div>";
    if (curScreen <= 10) {
        str += '<div id="question" class="'+clr+'"><span>'+gameData[c]['screens'][curScreen]['text']+'</span></div>';
    } else {
        str += '<div id="question" class="'+clr+'"></div>';
    }

    if (gameData[c]['screens'][curScreen]['answers'][0]) {
    str += '<div id="selecta" class="'+clr2+'" onClick="answer(0)"><span>'+gameData[c]['screens'][curScreen]['answers'][0]['text']+'</span></div>';
    }
    if (gameData[c]['screens'][curScreen]['answers'][1]) {
    str += '<div id="selectb" class="'+clr2+'" onClick="answer(1)"><span>'+gameData[c]['screens'][curScreen]['answers'][1]['text']+'</span></div>';
    }
    if (gameData[c]['screens'][curScreen]['answers'][2]) {
    str += '<div id="selectc" class="'+clr2+'" onClick="answer(2)"><span>'+gameData[c]['screens'][curScreen]['answers'][2]['text']+'</span></div>';
    }
    if (curScreen <= 10) {
        str += '<div id="next" class="'+clr+'" onClick="nextscreen()"><span>Go to '+gameData[c]['screens'][curScreen+1]['title']+'</span><div id="nexticon" style="background-image: url(images/'+cultivar+'/b_rtarrow.png);""></div></div>';
    } else {
        //var medalType = getMedal();
        //var txt = getResult(medalType);
        str += '<div id="feedback" class="'+clr+'"></div>';
        //if (wrongAns >= 0) {
            //str += '<br><br>You could improve your wine by paying more attention to question<br>'+(wrongAns+1)+': '+gameData[c]['screens'][wrongAns]['title'];
        //}
        //str += '</div>';

        str += '<div id="share" class="' + clr + '" onClick="sharePage()"><div class="share-row"><div class="share-icon"><i class="circled fa fa-share-alt"></i></div> <div class="share-heading">Share</div></div></div>';

        document.getElementById("game").innerHTML = '<div id="tasting" class="yellowText">Tasting your wine...</div><div id="medal"><img src="images/'+cultivar+'/tasting.gif"></div>';
        if(endTimer)clearTimeout(endTimer);
        setTimeout(function(){endTimer=null; showMedal();}, 1.75*fi);
    };

    str += '<div id="startagain" class="'+clr+'" onClick="startagain()"></div>';

    $('#credit-links').hide();
    $('#game').fadeOut(fo, function() {
        $('#game').css("background-image", "url(images/"+cultivar+"/"+(curScreen+1)+".png)");
        $('#gameback').css("background-image", "url(images/"+cultivar+"/top.png)");
        $('#game').fadeIn(fi, function(){ show("hintbutton"); });
        $('#medal').fadeIn(fi);
        $('#tasting').fadeIn(fi);
    });

    $('#menu').fadeOut(fo, function() {
        $('#menu').css("background-image", "url(images/"+cultivar+"/backleft.png)");
        $('#menu').html(str);
        $('#menu').fadeIn(fi);
    });

    if(document.getElementById("nexthint")) {
        document.getElementById("nexthint").style.backgroundImage="url(images/"+cultivar+"/b_hint_more.png)";
        document.getElementById("nexthint").style.backgroundPosition="0px 0px";
    }
    if(document.getElementById("hintbutton")) {
        document.getElementById("hintbutton").style.backgroundImage="url(images/"+cultivar+"/b_hint.png)";
        document.getElementById("hintbutton").style.backgroundPosition="0px 0px";
    }

    if (document.getElementById("hint")) {
        if (c==1 || c==3) {
            document.getElementById("hint").style.color="rgb(205,165,165)";
        } else {
            document.getElementById("hint").style.color="rgb(0,0,0)";
        }
    }

    //$('#hintbutton').fadeIn(fi);

    resetTimer();


}

function getMedal() {
    var mt = "Poison";
    for (var i=0; i < medalData.length; i++) {
        if (score >= parseInt(medalData[i]['score'])) {
            return medalData[i]['type'];
        }
    }
    return mt;
}
function getResult(medal) {
    for (var i=0; i < resultData.length; i++) {
        if (resultData[i]['cultivar'] == cultivar) {
            for (var n=0; n < resultData[i]['medals'].length; n++) {
                if (resultData[i]['medals'][n]['medal'] == medal) {
                    return resultData[i]['medals'][n]['text'];
                }
            }
        }
    }
}

function showMedal() {
    var medalType = getMedal();
    var str = getResult(medalType);
    if (wrongAns >= 0) {
        str += '<br><br>You could improve your wine by paying more attention to question<br>'+(wrongAns+1)+': '+gameData[cultivarid]['screens'][wrongAns]['title'];
    }
    document.getElementById("question").innerHTML = '<span>'+gameData[cultivarid]['screens'][11]['text']+'</span>';
    document.getElementById("feedback").innerHTML = str;
    document.getElementById("game").innerHTML = '<div id="medal"><img src="images/'+medalType+'.png"</div>';
    $('#medal').fadeIn(fi);
}

function showhint() {

    if (!executing) {
        executing = true;
        $("#hint").promise().done(function() {
        executing = false;
        });

    if (!pageon) {
        document.getElementById("hintbutton").style.backgroundPosition="-194px 0px";
        document.getElementById("nexthint").style.backgroundPosition="0px 0px";

        document.getElementById("hint").style.backgroundImage="url(images/"+cultivar+"/hintback.png)";
        if (curScreen == 0) {
            mapon = false;
            document.getElementById("map").style.backgroundImage="url(images/"+cultivar+"/map.png)";
            document.getElementById("hint").innerHTML = "";
            $("#map").fadeIn(fo);
            show("nexthint");
        } else {
            document.getElementById("map").style.backgroundImage="";
            document.getElementById("hint").innerHTML = "<span>"+gameData[cultivarid]['screens'][curScreen]['hint']+"</span>";
            hide("nexthint");
        }
        pageon = true;
        $("#hint").fadeIn(fo);

    } else {
        document.getElementById("hint").innerHTML = "";
        document.getElementById("hintbutton").style.backgroundPosition="0px 0px";
        $("#hint").fadeOut(fo);
        $("#map").fadeOut(fo);
        hide("nexthint");
        pageon = false;
    }
    resetTimer();
    }
}
function nexthint() {
    if (!mapon) {
        document.getElementById("nexthint").style.backgroundPosition="-99px 0px";
        document.getElementById("hint").innerHTML = "<span>"+gameData[cultivarid]['screens'][curScreen]['hint']+"</span>";
        $("#map").fadeOut(200);
        mapon = true;
    } else {
        document.getElementById("nexthint").style.backgroundPosition="0px 0px";
        document.getElementById("hint").innerHTML = "";
        $("#map").fadeIn(200);
        mapon = false;
    }
    resetTimer();
}

function resetTimer() {
    if (autoReset) {
        if(endTimer)clearTimeout(endTimer);
        if(screenTimer)clearTimeout(screenTimer);
        screenTimer=setTimeout(function(){screenTimer=null; startagain(); resetApp();}, timerDelay);	
    }
}




/// UTILS


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
         for (var i = (start || 0), j = this.length; i < j; i++) {
             if (this[i] === obj) { return i; }
         }
         return -1;
    }
}

function hide(elmnt) {
    if(document.getElementById(elmnt)){
    document.getElementById(elmnt).style.display="none";
    }
}
function show(elmnt) {
    if(document.getElementById(elmnt)){
    document.getElementById(elmnt).style.display="block";
    }
}

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
}



/// DATA FETCHING

function getData() {
    var connect = new XMLHttpRequest();
    connect.open("GET","game.xml",false);
    connect.setRequestHeader("Content-Type", "text/xml");
    connect.send();

    gameData = [];
    resultData = [];
    medalData = [];

    var xmlDoc = connect.responseXML;
    var x=xmlDoc.getElementsByTagName("cultivar");
    for (i=0;i<x.length;i++) {
        var obj = new Object();
        obj['id'] = x[i].getAttribute('id') ;
        obj['name'] = x[i].getAttribute('name') ;
        obj['title'] = x[i].getAttribute('title') ;

        var screens = [];
        var s = x[i].getElementsByTagName("screen");

        for (n=0;n<s.length;n++) {
            var scr = new Object();
            scr['no'] = s[n].getAttribute('no') ;
            scr['text'] = s[n].getAttribute('text') ;
            scr['title'] = s[n].getAttribute('title');
            scr['hint'] = s[n].childNodes[0].nodeValue;

            var answers = [];
            var a = s[n].getElementsByTagName("answer");
            for (r=0;r<a.length;r++) {
                var ans = new Object();
                ans['no'] = a[r].getAttribute('no') ;
                ans['text'] = a[r].getAttribute('text') ;
                ans['score'] = a[r].getAttribute('score') ;
                answers.push(ans);
            }

            scr['answers'] = answers;
            screens.push(scr);
        }
        obj['screens'] = screens;
        gameData.push(obj);
    }

    var r=xmlDoc.getElementsByTagName("wine");
    for (i=0;i<r.length;i++) {
        var obj = new Object();
        obj['cultivar'] = r[i].getAttribute('wine') ;
        var medals = [];
        var res = r[i].getElementsByTagName("result");
        for (n=0;n<res.length;n++) {
            var result = new Object();
            result['medal'] = res[n].getAttribute('medal') ;
            result['text'] = res[n].getAttribute('text') ;
            medals.push(result);
        }
        obj['medals'] = medals;
        resultData.push(obj);
    }

    var m=xmlDoc.getElementsByTagName("medal");
    for (i=0;i<x.length;i++) {
        var obj = new Object();
        obj['type'] = m[i].getAttribute('type') ;
        obj['score'] = m[i].getAttribute('score');
        medalData.push(obj);
    }
}
