var $win = $(window);
var $lay = $('#every');
var baseSize = {
    w: 1900,
    h: 920    
}
function updateScale() {
    var ww = $win.width();
    var wh = $win.height();
    var newScale = 1;
    if(ww/wh < baseSize.w/baseSize.h) {
        newScale = ww / baseSize.w;
    } else {
        newScale = wh / baseSize.h;        
    }
    $lay.css('transform', 'scale(' + newScale + ',' +  newScale + ')');
}
$(window).resize(updateScale);