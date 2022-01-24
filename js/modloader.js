// Modloader script is inspired by Cookie Clicker mod loading
// Function to load a mod
// requires url to mod file and name
var howmanymods = 0;
var modnames2 = [];
function loadmod(url,name){
    // Initializing script
    let modscript = document.createElement("script");
    modscript.setAttribute("src", url);
    document.body.appendChild(modscript);
    modscript.addEventListener("load", modloaded(url,name), false);
}
function modloaded(url,name){
    setTimeout(() => {
        // Call function from mod name to start mod script
        try{
            initializemod(name);
        }catch(e){
            console.log("[MODLOADER] Error loading mod '" + name +"' Error: " + e + "\n Does mod name and url is right?");
            $("script").last().remove()
            throw new Error("[MODLOADER] Aborting loading mod function");
        }
        console.log("[MODLOADER] Loaded 1 new mod '" + name + "' from " + url);
        $('.mod-in').toggleClass('show');
        setTimeout(() => {
            $('.mod-in').toggleClass('show');
        },1000)
        howmanymods += 1;
        modnames2 += [name + ","];
    },5000)
}
function mods(){
    var word;
    var word2;
    if(howmanymods > 1){
        word = "are";
        word2 = "mods";
    }
    else{
        word = "is";
        word2 = "mod";
    }
    console.log("[MODLOADER] There " + word + " " + howmanymods + " " + word2 + " (" + modnames2 + ")");
}