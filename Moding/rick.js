var appended = false
function initializemod(name){
    if(name == "rick"){
        modready("rick");
        youtube();
    }
}
function youtube(){
    if(!appended){
        var therick = document.createElement("IFRAME");
        therick.setAttribute("width","560");
        therick.setAttribute("height","315");
        therick.setAttribute("frameborder","0");
        therick.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        therick.setAttribute("src","https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0");
        therick.setAttribute("class","multi glow");
        document.getElementById("formods").appendChild(therick);
        appended = true;
    }
}