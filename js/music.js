// My custom music loading script
// Loading page
document.getElementById("ascendtree").style.display = "none";
document.getElementById("ascend").style.display = "none";
document.getElementById("loading").style.display = "none";
document.getElementById("everything").style.display = "none";
document.getElementById("ap").style.display = "none";
document.getElementById("gate").style.display = "none";
document.getElementById("setting").style.display = "none";
document.getElementById("muchnews").style.display = "none";
loadsetting();
// Assigning variables
var elevenload = 0;
var gamemoment = 0;
var internetspeed = 0;
var localgame = true;
var musicon;
var player = document.getElementById('audio');
var el = document.querySelector('div');
el.scrollTop = el.scrollHeight;
document.onload = loading();
var el = document.getElementById('body')
el.onclick = function () {
    if(elevenload == 0){
        document.getElementById("loading").style.display = "block";
        fullload();
    }
}
//document.onkeydown = function(evt) {
//    evt = evt || window.event;
//    if (evt.keyCode == 32 && elevenload > 0) {
//        end();
//    }
//};
function loadsetting(){
    var loadedmusic = JSON.parse(localStorage.getItem("clockroomsettings"));
    if(loadedmusic == undefined){
        var savemusic = {
            musicon: true
        }
        localStorage.setItem("clockroomsettings",JSON.stringify(savemusic));
    }
    else{
        musicon = loadedmusic.musicon;
    }
}
function savesetting(settingvalue){
    var savemusic = {
        musicon: settingvalue
    }
    localStorage.setItem("clockroomsettings",JSON.stringify(savemusic));
}
function changemusicstate(){
    if(musicon){
        musicon = false;
        savesetting(false);
    }
    else{
        musicon = true;
        savesetting(true);
    }
}
function loading(){
    console.log("[Loader] Page loaded")
    document.getElementById("loadingtext").innerHTML = "Click anywhere to start"
}
function fullload(){
    elevenload = 1;
    console.log("[Loader] Recieved a click")
    document.getElementById("loadingtext").innerHTML = "Please wait..."
}
setInterval(() => {
    if(elevenload > 0 && elevenload < 11){
        elevenload += 1;
    }
    if(elevenload == 11){
        checkinternetspeed();
        elevenload = 12;
    }
    if(musicon){
        player.volume = 1;
        document.getElementById("musicswitch").innerHTML = "on";
        document.getElementById("musicswitch2").innerHTML = "on";
    }
    if(!musicon){
        player.volume = 0;
        document.getElementById("musicswitch").innerHTML = "off";
        document.getElementById("musicswitch2").innerHTML = "off";
    }
},10)
function checkinternetspeed(){
    if(!localgame){
        document.getElementById("loadingtext").innerHTML = "Measuring internet speed..."
        testConnectionSpeed.run(1.5, function(mbps){internetspeed = mbps; continuecheckofinternet();}, function(mbps){internetspeed = mbps; continuecheckofinternet();} )
    }
    else{
        end();
    }
}
function continuecheckofinternet(){
    console.log("[Loader] " + internetspeed/8 + "MB/s")
    if(internetspeed/8 >= 0.5){
        end();
    }
    else{
        loadmusic();
    }
}
function loadmusic(){
    document.getElementById("loadingtext").innerHTML = "Loading music..."
    console.log("[Loader] Loading music initiated")
    load();
}
function load(){
    player.volume = 0
    document.getElementById("loadingtext").innerHTML = "Loading ambient music (20.1MB)"
    player.setAttribute('src', 'music/sittinginaroom.wav');
    player.load();
    player.play();
    setTimeout(() =>{
        afterambient();
    },5000)
}
function afterambient(){
    console.log("[Loader] Ambient music loaded (20.1MB)")
    document.getElementById("loadingtext").innerHTML = "Loading welcoming ascend music (1.92MB)"
    player.setAttribute('src','music/ascendstart.wav');
    player.load();
    player.play();
    setTimeout(() => {
        afterwelcomeascend();
    },2000)
}
function afterwelcomeascend(){
    console.log("[Loader] Ascend music (loop) loaded (1.92MB)")
    document.getElementById("loadingtext").innerHTML = "Loading looping ascend music (2.79MB)"
    player.setAttribute('src','music/ascendloop.wav');
    player.load();
    player.play();
    setTimeout(() => {
        end();
    },2000)
}
function end(){
    console.log("[Loader] Ascend music (loop) loaded (2.79MB)")
    document.getElementById("loadingtext").innerHTML = "Done"
    menumusic();
    console.log("[Loader] Done")
    document.getElementById("everything").style.display = "block";
    document.getElementById("loading").style.display = "none";
    document.getElementById("loadingtext").style.display = "none";
    el.scrollTop = 0;
}
// Start main ambient
function menumusic(){
    gamemoment = 1;
    player.setAttribute('src', 'music/sittinginaroom.wav');
    if(musicon){
        player.volume = 1
    }
    player.load();
    player.play();
}
// Start ascend music
function ascendmusic(){
    gamemoment = 2;
    player.setAttribute('src','music/ascendstart.wav');
    if(musicon){
        player.volume = 0.2
    }
    player.load();
    player.load();
}
// Looper
player.addEventListener("ended", function(){
    if(gamemoment == 1){
        player.currentTime = 0;
        player.play();
    }
    if(gamemoment == 2){
        gamemoment = 3;
        player.setAttribute('src','music/ascendloop.wav');
        player.load();
        player.play();
    }
    if(gamemoment == 3){
        player.currentTime = 0;
        player.play();
    }
});