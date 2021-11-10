// Loading page
document.getElementById("ascendtree").style.display = "none";
document.getElementById("ascend").style.display = "none";
document.getElementById("loading").style.display = "none";
document.getElementById("everything").style.display = "none";
document.getElementById("ap").style.display = "none";
// Assigning variables
var elevenload = 0;
var gamemoment = 0;
var player = document.getElementById('audio');
document.onload = loading();
var el = document.getElementById('body')
el.onclick = function () {
    if(elevenload == 0){
        document.getElementById("loading").style.display = "block";
        fullload();
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
        loadmusic();
        elevenload = 12;
    }
},500)
function loadmusic(){
    document.getElementById("loadingtext").innerHTML = "Loading music..."
    console.log("[Loader] Loading music initiated")
    load();
}
function load(){
    document.getElementById("loadingtext").innerHTML = "Loading ambient music (20.1MB)"
    player.setAttribute('src', 'music/sittinginaroom.wav');
    player.load();
    console.log("[Loader] Ambient music loaded (20.1MB)")
    document.getElementById("loadingtext").innerHTML = "Loading welcoming ascend music (1.92MB)"
    player.setAttribute('src','music/ascendstart.wav');
    player.load();
    console.log("[Loader] Welcoming ascend music loaded (1.92MB)")
    document.getElementById("loadingtext").innerHTML = "Loading ascend music (2.79MB)"
    player.setAttribute('src','music/ascendloop.wav');
    player.load();
    console.log("[Loader] Ascend music (loop) loaded (2.79MB)")
    document.getElementById("loadingtext").innerHTML = "Done"
    menumusic();
    console.log("[Loader] Done")
    document.getElementById("everything").style.display = "block";
    document.getElementById("loading").style.display = "none";
    document.getElementById("loadingtext").style.display = "none";
}
// Start main ambient
function menumusic(){
    gamemoment = 1;
    player.setAttribute('src', 'music/sittinginaroom.wav');
    player.volume = 1
    player.load();
    player.play();
}
// Start ascend music
function ascendmusic(){
    gamemoment = 2;
    player.setAttribute('src','music/ascendstart.wav');
    player.volume = 0.2
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