// Modloader script very similiar to Cookie Clicker mod loading (except you can write a script that will totally change the game or add a new game endings)
// Function to load a mod
// requires url to mod file and name
var howmanymods = 0;
var modnames = [];
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
        howmanymods += 1;
        modnames += [name + ","];
    },1000)
}
function mods(){
    console.log("[MODLOADER] There are " + howmanymods + " mods (" + modnames + ")");
}