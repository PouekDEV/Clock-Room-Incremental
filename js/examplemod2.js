// Example mod for Clock Room
var check = false;
function initializemod(name){
    if(name == "example2"){
        check = true;
    }
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 32 && check) {
        alert("You pressed space!");
    }
};