// Modloader script is inspired by Cookie Clicker mod loading
// requires url to mod file and name
var howmanymods = 0;
var modnames2 = [];
var canload = true;
var queuefinished = true;
var queuelinks = [];
var queuenames = [];
var onnumber;
var infourl;
var modname;
var timeoutlever = true;
function queuevariables(links,names){
    if(queuefinished){
        queuelinks = links;
        queuenames = names;
        queue();
        queuefinished = false;
    }
}
function queue(){
    onnumber = queuelinks.length;
    const queuecheck = setInterval(() => {
        if(canload && onnumber != 0){
            onnumber -= 1;
            loadmod(queuelinks[onnumber],queuenames[onnumber]);
            canload = false;
        }
        else if(onnumber == 0){
            clearInterval(queuecheck);
        }
    },100)
}
function loadmod(url,name){
    // Initializing script
    canload = false;
    modname = name;
    let modscript = document.createElement("script");
    modscript.setAttribute("src", url);
    document.body.appendChild(modscript);
    modscript.addEventListener("load", modloaded(url,name), false);
}
function modloaded(url,name){
    infourl = url
    setTimeout(() => {
        // Call function from mod name to start mod script
        try{
            initializemod(name);
        }catch(e){
            console.log("[MODLOADER] Error loading mod '" + name +"' Error: " + e + "\n Does mod name and url is right?");
            $("script").last().remove()
            canload = true;
            timeoutlever = false;
        }
        timeout(name);
        timeoutlever = true;
    },1000)
}
function timeout(name){
    setTimeout(() => {
        if(timeoutlever){
            console.log("[MODLOADER] Error loading mod '" + name +"' Error: Timeout error. Mod not responded in 5 seconds \n Does mod name and url is right?");
            $("script").last().remove()
            canload = true;
        }
    },5000)
}
// This is called by a mod
function modready(name){
    if(name == modname){
        timeoutlever = false;
        console.log("[MODLOADER] Loaded 1 new mod '" + name + "' from " + infourl);
        $('.mod-in').toggleClass('show');
        setTimeout(() => {
            $('.mod-in').toggleClass('show');
        },3000)
        howmanymods += 1;
        modnames2 += [name + " "];
        canload = true;
    }
    else{
        timeoutlever = false;
        console.log("[MODLOADER] Error loading mod '" + name +"' Error: Unknown mod name reported");
        $("script").last().remove()
        canload = true;
    }
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