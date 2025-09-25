$.fn.selectText = function() {

    // http://stackoverflow.com/a/20079910
    var node = this.get(0);

    if ( window.getSelection ) {
        var range = document.createRange();
        range.selectNodeContents( node );
        window.getSelection().removeAllRanges();
        window.getSelection().addRange( range );
    }
    else if ( document.selection ) {
        var range = document.body.createTextRange();
        range.moveToElementText( node );
        range.select();
    }
};
