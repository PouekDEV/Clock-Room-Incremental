// My custom music loading script
// Loading page
function hide(){
    document.getElementById("ascendtree").style.display = "none";
    document.getElementById("ascend").style.display = "none";
    document.getElementById("moddim").style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("everything").style.display = "none";
    document.getElementById("ap").style.display = "none";
    document.getElementById("gate").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("muchnews").style.display = "none";
    document.getElementById("endtext").style.display = "none";
    document.getElementById("endtext2").style.display = "none";
    document.getElementById("smelter").style.display = "none";
    document.getElementById("liquidcontainerascend").style.display = "none";
    document.getElementById("gateprompt").style.display = "none";
    document.getElementById("reloaddim").style.display = "none";
}
hide();
loadsetting();
// Assigning variables
var elevenload = 0;
var gamemoment = 0;
var internetspeed = 0;
var localgame = false;
var musicon;
var effecton;
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
function loadsetting(){
    var loadedmusic = JSON.parse(localStorage.getItem("clockroomsettings"));
    if(loadedmusic == null){
        var savemusic = {
            musicon: true,
            effecton: true
        }
        localStorage.setItem("clockroomsettings",JSON.stringify(savemusic));
    }
    else{
        musicon = loadedmusic.musicon;
        effecton = loadedmusic.effecton;
    }
}
function savesetting(settingvalue){
    var savemusic = {
        musicon: settingvalue,
        effecton: effecton
    }
    localStorage.setItem("clockroomsettings",JSON.stringify(savemusic));
}
function savesettingeffect(settingvalue){
    var savemusic = {
        musicon: musicon,
        effecton: settingvalue
    }
    localStorage.setItem("clockroomsettings",JSON.stringify(savemusic));
}
function changeeffectstate(){
    upgrade_click_sound();
    if(effecton){
        effecton = false;
        savesettingeffect(false);
    }
    else{
        effecton = true;
        savesettingeffect(true);
        save();
        document.getElementById("reloaddim").style.display = "block";
        location.reload();
    }
}
function changemusicstate(){
    upgrade_click_sound();
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
    loadsave();
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
    if(effecton){
        document.getElementById("bgeffect").innerHTML = "on";
        document.getElementById("bgeffect2").innerHTML = "on";
        document.getElementById("stars").style.display = "block";
    }
    if(!effecton){
        document.getElementById("bgeffect").innerHTML = "off";
        document.getElementById("bgeffect2").innerHTML = "off";
        document.getElementById("stars").style.display = "none";
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
    console.log("[Loader] " + (internetspeed/8) * 10 + "MB/s")
    if(internetspeed/8 >= 0.5){
        end();
    }
    else{
        alert("It appears that you have a slow internet connection \n This can cause music to cut out")
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
    //document.getElementById("everything").style.display = "block";
    checkgate();
    document.getElementById("loading").style.display = "none";
    document.getElementById("loadingtext").style.display = "none";
    el.scrollTop = 0;
    initsave();
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