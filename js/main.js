// There is a ton and I mean a TON of cookie clicker references so be aware of that I guess
// Also Im Polish so there can occur some grammar mistakes
// This applies to all files
// Values that are saved (First phase)
var currency = 0;
var currency10percent = 0;
var percentgot = false;
var multiplier = 1;
var startingmultiplier = 1;
var multiplierlevel = 0;
var upgrademultivalue = 10;
var ticktocks = 0;
var renewticks = 1000;
var tickleft = 1000;
var cheaperticktockscost = 1000;
var cheaperticktockslv = 0;
var ascendpoints = 0;
var sacrificemultipliercost = 3.0
var isascending = false;
var gate = false;
// Prestige upgrades (they count as values for saving)
var hu1b = false;
var hu2 = false;
var hu2b = false;
var hu3 = false;
var hu3b = false;
var hu4 = false;
var hu4b = false;
var hu5 = false;
var hu5b = false;
var hu6 = false;
var hu6b = false;
// Mod data (counts as a thing to save)
var modnames = [];
var modlinks = [];
// Gate phase values (they count as values for saving)
var shards = 1;
var dust = 0;
var shardcrushingcost = 1000;
var dustsmeltingcost = 10;
var completiontowardskey = 0;
var currentmessage = 0;
var iskey = false;
var timeleftinseconds = 3602;
var issmelteravailable = false;
// Last bottle phase values (yes they count as values for saving too)
// You need 5000 ascend points deposited to end the game
var isbottlefilled = false;
var bottlepercent = 0;
var filledbottlenotpercent = 0;
var bottlecapacity = 10;
var isbottlephase = false;
var capacityincreascecost = 10000;
var gainingfromticks = 1;
var gainingincreasecost = 100000;
// Values that are not saved
var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
var ascendseconds = 0;
var onesoundofgate = false;
var cansave = false;
var importingsave = false;
var messages = ["You have one shard","You have two shards","Shards begin to duplicate","Shards surround you","You have a lot of dust","You think of smelting the dust","You have the key","Gate is open"]
// Some game info
var GameID = {
    version: 1.0,
    vname: "Launch",
    beta: 0,
    launch: "10.02.2022"
}
// Mod stuff
function showmodmenu(){
    upgrade_click_sound();
    document.getElementById("moddim").style.display = "block";
}
function hidemodmenu(){
    upgrade_click_sound();
    document.getElementById("moddim").style.display = "none";
}
function loadnewmods(){
    upgrade_click_sound();
    var url = prompt("Paste mod url here");
    var name = prompt("Paste short mod name here");
    var r = confirm("Is this correct? \n Mod name: " + name + " \n Mod url: " + url);
    if(r){
        if(modnames == undefined){
            modnames = [];
            modlinks = [];
        }
        loadmod(url,name);
        modnames.push(name);
        modlinks.push(url);
    }
}
function startmods(){
    queuevariables(modlinks,modnames);
}
function deletemoddata(){
    upgrade_click_sound();
    var r = confirm("Are you sure you want to delete ALL of mod data?");
    if(r){
        modnames = [];
        modlinks = [];
        save();
        document.getElementById("reloaddim").style.display = "block";
        location.reload();
    }
}
// All save functions
function save(){
    var clocksave = {
        currency: currency,
        currency10percent: currency10percent,
        percentgot: percentgot,
        multiplier: multiplier,
        startingmultiplier: startingmultiplier,
        multiplierlevel: multiplierlevel,
        upgrademultivalue: upgrademultivalue,
        ticktocks: ticktocks,
        renewticks: renewticks,
        tickleft: tickleft,
        cheaperticktockscost: cheaperticktockscost,
        cheaperticktockslv: cheaperticktockslv,
        ascendpoints: ascendpoints,
        sacrificemultipliercost: sacrificemultipliercost,
        isascending: isascending,
        gate: gate,
        hu1b: hu1b,
        hu2: hu2,
        hu2b: hu2b,
        hu3: hu3,
        hu3b: hu3b,
        hu4: hu4,
        hu4b: hu4b,
        hu5: hu5,
        hu5b: hu5b,
        hu6: hu6,
        hu6b: hu6b,
        shards: shards,
        dust: dust,
        shardcrushingcost: shardcrushingcost,
        dustsmeltingcost: dustsmeltingcost,
        completiontowardskey: completiontowardskey,
        currentmessage: currentmessage,
        iskey: iskey,
        timeleftinseconds: timeleftinseconds,
        issmelteravailable: issmelteravailable,
        versionsave: GameID.version,
        modnames: modnames,
        modlinks: modlinks,
        isbottlefilled: isbottlefilled,
        bottlepercent: bottlepercent,
        bottlecapacity: bottlecapacity,
        isbottlephase: isbottlephase,
        capacityincreascecost: capacityincreascecost,
        gainingfromticks: gainingfromticks,
        gainingincreasecost: gainingincreasecost,
        filledbottlenotpercent: filledbottlenotpercent
    }
    localStorage.setItem("clockroomsave",JSON.stringify(clocksave));
}
function loadsave(){
    if(!importingsave){
        var loadedclocksave = JSON.parse(localStorage.getItem("clockroomsave"));
    }
    else{
        cansave = false;
        var savecrypted = prompt("Paste your save here");
        if(savecrypted != null && savecrypted != "DOABARRELROLL"){
            var savestringed = atob(savecrypted);
            var loadedclocksave = JSON.parse(savestringed)
        }
        else if(savecrypted == "DOABARRELROLL"){
            var a="-webkit-",b='transform:rotate(1turn);',c='transition:4s;';document.head.innerHTML+='<style>body{'+a+b+a+c+b+c
            setTimeout(() => {
                $('style').remove();
            },4500)
        }
    }
    if(loadedclocksave == null){
        console.log("No save found starting new game")
    }
    else{
        if(loadedclocksave.versionsave > GameID.version && importingsave){
            alert("This save file was saved in newer version of the game")
        }
        else if(loadedclocksave.versionsave <= GameID.version && !importingsave){
            cansave = false;
            currency = loadedclocksave.currency
            currency10percent = loadedclocksave.currency10percent
            percentgot = loadedclocksave.percentgot
            multiplier = loadedclocksave.multiplier
            startingmultiplier = loadedclocksave.startingmultiplier
            multiplierlevel = loadedclocksave.multiplierlevel
            upgrademultivalue = loadedclocksave.upgrademultivalue
            ticktocks = loadedclocksave.ticktocks
            renewticks = loadedclocksave.renewticks
            tickleft = loadedclocksave.tickleft
            cheaperticktockscost = loadedclocksave.cheaperticktockscost
            cheaperticktockslv = loadedclocksave.cheaperticktockslv
            ascendpoints = loadedclocksave.ascendpoints
            sacrificemultipliercost = loadedclocksave.sacrificemultipliercost
            isascending = loadedclocksave.isascending
            gate = loadedclocksave.gate
            hu1b = loadedclocksave.hu1b
            hu2 = loadedclocksave.hu2
            hu2b = loadedclocksave.hu2b
            hu3 = loadedclocksave.hu3
            hu3b = loadedclocksave.hu3b
            hu4 = loadedclocksave.hu4
            hu4b = loadedclocksave.hu4b
            hu5 = loadedclocksave.hu5
            hu5b = loadedclocksave.hu5b
            hu6 = loadedclocksave.hu6
            hu6b = loadedclocksave.hu6b
            shards = loadedclocksave.shards
            dust = loadedclocksave.dust
            shardcrushingcost = loadedclocksave.shardcrushingcost
            dustsmeltingcost = loadedclocksave.dustsmeltingcost
            completiontowardskey = loadedclocksave.completiontowardskey
            currentmessage = loadedclocksave.currentmessage
            iskey = loadedclocksave.iskey
            timeleftinseconds = loadedclocksave.timeleftinseconds
            issmelteravailable = loadedclocksave.issmelteravailable
            modnames = loadedclocksave.modnames
            modlinks = loadedclocksave.modlinks
            isbottlefilled = loadedclocksave.isbottlefilled
            bottlepercent = loadedclocksave.bottlepercent
            bottlecapacity = loadedclocksave.bottlecapacity
            isbottlephase = loadedclocksave.isbottlephase
            capacityincreascecost = loadedclocksave.capacityincreascecost
            gainingfromticks = loadedclocksave.gainingfromticks
            gainingincreasecost = loadedclocksave.gainingincreasecost
            filledbottlenotpercent = loadedclocksave.filledbottlenotpercent
            cansave = true;
            startmods();
            save();
        }
        else if(loadedclocksave.versionsave <= GameID.version && importingsave){
            var r = confirm("Save file is correct. Do you want to load it? \n WARNING Loading this save will overwrite your current one")
            if(r){
                currency = loadedclocksave.currency
                currency10percent = loadedclocksave.currency10percent
                percentgot = loadedclocksave.percentgot
                multiplier = loadedclocksave.multiplier
                startingmultiplier = loadedclocksave.startingmultiplier
                multiplierlevel = loadedclocksave.multiplierlevel
                upgrademultivalue = loadedclocksave.upgrademultivalue
                ticktocks = loadedclocksave.ticktocks
                renewticks = loadedclocksave.renewticks
                tickleft = loadedclocksave.tickleft
                cheaperticktockscost = loadedclocksave.cheaperticktockscost
                cheaperticktockslv = loadedclocksave.cheaperticktockslv
                ascendpoints = loadedclocksave.ascendpoints
                sacrificemultipliercost = loadedclocksave.sacrificemultipliercost
                isascending = loadedclocksave.isascending
                gate = loadedclocksave.gate
                hu1b = loadedclocksave.hu1b
                hu2 = loadedclocksave.hu2
                hu2b = loadedclocksave.hu2b
                hu3 = loadedclocksave.hu3
                hu3b = loadedclocksave.hu3b
                hu4 = loadedclocksave.hu4
                hu4b = loadedclocksave.hu4b
                hu5 = loadedclocksave.hu5
                hu5b = loadedclocksave.hu5b
                hu6 = loadedclocksave.hu6
                hu6b = loadedclocksave.hu6b
                shards = loadedclocksave.shards
                dust = loadedclocksave.dust
                shardcrushingcost = loadedclocksave.shardcrushingcost
                dustsmeltingcost = loadedclocksave.dustsmeltingcost
                completiontowardskey = loadedclocksave.completiontowardskey
                currentmessage = loadedclocksave.currentmessage
                iskey = loadedclocksave.iskey
                timeleftinseconds = loadedclocksave.timeleftinseconds
                issmelteravailable = loadedclocksave.issmelteravailable
                modnames = loadedclocksave.modnames
                modlinks = loadedclocksave.modlinks
                isbottlefilled = loadedclocksave.isbottlefilled
                bottlepercent = loadedclocksave.bottlepercent
                bottlecapacity = loadedclocksave.bottlecapacity
                isbottlephase = loadedclocksave.isbottlephase
                capacityincreascecost = loadedclocksave.capacityincreascecost
                gainingfromticks = loadedclocksave.gainingfromticks
                gainingincreasecost = loadedclocksave.gainingincreasecost
                filledbottlenotpercent = loadedclocksave.filledbottlenotpercent
                save();
                document.getElementById("reloaddim").style.display = "block";
                location.reload();
            }
        }   
    }
    if(importingsave){
        importingsave = false;
    }
}
function presave(){
    upgrade_click_sound();
    save();
    $('.slide-in').toggleClass('show');
    setTimeout(() => {
        $('.slide-in').toggleClass('show');
    },2000)
}
function preload(){
    upgrade_click_sound();
    loadsave();
}
function importsave(){
    upgrade_click_sound();
    importingsave = true;
    loadsave();
}
function exportsave(){
    upgrade_click_sound();
    save();
    var loadedclocksave = JSON.parse(localStorage.getItem("clockroomsave"));
    var stringsave = JSON.stringify(loadedclocksave);
    var basesave = btoa(stringsave);
    navigator.clipboard.writeText(basesave).then(() => {alert("Copied save to clipboard")}).catch(() => {alert("Something went wrong and save couldn't be copied to clipboard")})
}
function deletesave(){
    upgrade_click_sound();
    var r = confirm("Do you want to delete save?")
    if(r){
        localStorage.removeItem("clockroomsave");
        document.getElementById("reloaddim").style.display = "block";
        location.reload();
    }
}
// Monitor size check
function checkgate(){
    if(viewportHeight >= 0 && viewportWidth >= 0){// 950x1800
        if(gate){
            document.getElementById("gate").style.display = "block";
            document.getElementById("setting").style.display = "block";
            document.getElementById("muchnews").style.display = "block";
        }
        else{
            document.getElementById("everything").style.display = "block";
        }
    }
    else{
        alert("Sorry but your screen is too small \n Come back when you will have acces to a bigger screen")
    }
}
// Ascend blank screen
function beforeascendscrren(){
    ascendseconds = 1;
    currency10percent = currency / 10;
    // Hide game
    document.getElementById("ascend").style.display = "none";
    document.getElementById("everything").style.display = "none";
    document.getElementById("ap").style.display = "block";
    ascendmusic();
}
setInterval(() => {
    if(ascendseconds > 0 && ascendseconds < 6){
        ascendseconds += 1;
    }
    if(ascendseconds == 6){
        ascendseconds = 7;
        ascendstuff();
    }
},1000)
// Ascending
function ascendstuff(){
    isascending = true;
    // Do maths
    percentgot = false;
    currency = 0;
    startingmultiplier += (ticktocks / 100);
    startingmultiplier += multiplier
    multiplier = 0;
    ascendpoints += ticktocks;
    multiplierlevel = 0;
    upgrademultivalue = 10;
    ticktocks = 0;
    renewticks = 1000;
    tickleft = 1000;
    cheaperticktockscost = 1000;
    cheaperticktockslv = 0;
    // Show tree
    if(!isbottlephase){
        document.getElementById("ascendtree").style.display = "block";
        document.getElementById("ap").style.display = "none";
        document.getElementById("setting").style.display = "none";
    }
    else{
        document.getElementById("ap").style.display = "none";
        document.getElementById("setting").style.display = "none";
        document.getElementById("ascendtree").style.display = "block";
        document.getElementById("ascendupgrades").style.display = "none";
        document.getElementById("liquidcontainerascend").style.display = "block";
    }
}
// Go back from ascend tree
function goback(){
    upgrade_click_sound();
    menumusic();
    // Set variables
    if(hu6b && !isbottlephase){
        gate = true;
    }
    multiplier = startingmultiplier;
    startingmultiplier = 0;
    isascending = false;
    // Visibility
    if(!gate){
        document.getElementById("everything").style.display = "block";
        document.getElementById("ascendtree").style.display = "none";
    }
    else{
        document.getElementById("gate").style.display = "block";
        document.getElementById("setting").style.display = "block";
        document.getElementById("muchnews").style.display = "block";
        document.getElementById("ascendtree").style.display = "none";
    }
    if(isbottlephase){
        document.getElementById("liquidcontainerascend").style.display = "none";
    }
}
// Ascending buy upgrades functions
function buyhu1(){
    if(ascendpoints >= 1){
        prestige_upgrade_click_sound();
        ascendpoints -= 1;
        hu1b = true;
        hu2 = true;
        hu5 = true;
    }
}
function buyhu2(){
    if(ascendpoints >= 25){
        prestige_upgrade_click_sound();
        ascendpoints -= 25;
        hu2b = true;
        hu3 = true;
        hu4 = true;
    }
}
function buyhu3(){
    if(ascendpoints >= 100){
        prestige_upgrade_click_sound();
        ascendpoints -= 100;
        hu3b = true;
    }
}
function buyhu4(){
    if(ascendpoints >= 100){
        prestige_upgrade_click_sound();
        ascendpoints -= 100;
        hu4b = true;
    }
}
function buyhu5(){
    if(ascendpoints >= 500){
        prestige_upgrade_click_sound();
        ascendpoints -= 500;
        hu5b = true;
        hu6 = true;
    }
}
function buyhu6(){
    if(ascendpoints >= 1000){
        prestige_upgrade_click_sound();
        ascendpoints -= 1000;
        hu6b = true;
    }
}
// Short number names
var ranges = [
 {
    divider: 1e24,
    suffix: 'Sep'
 },
 {
    divider: 1e21,
    suffix: 'Sex'
 },
 {
    divider: 1e18,
    suffix: 'Qui'
 },
 {
    divider: 1e15,
    suffix: 'Qua'
 },
 {
    divider: 1e12,
    suffix: 'T'
 },
 {
    divider: 1e9,
    suffix: 'B'
 },
 {
    divider: 1e6,
    suffix: 'M'
 },
 {
    divider: 1e3,
    suffix: 'K'
 }
];
function initsave(){
    cansave = true;
}
// Show Game Saved message and call save function
setInterval(() => {
    if(cansave){
        if(!isascending){
            save();
            $('.slide-in').toggleClass('show');
            setTimeout(() =>{
                $('.slide-in').toggleClass('show');
            },2000)
        }
    }
},30000)//30000 - 3s
// Simulate Ticks
setInterval(() => {
    if(!isascending && !gate){
        currency += (1 * multiplier);
        tickleft -= (1 * multiplier);
    }
    if(gate && timeleftinseconds != 0){
        timeleftinseconds -= 1;
    }
},1000)
// Update displayed values
setInterval(() => {
    $(".stars").css("width", viewportWidth);
    $(".stars").css("height", viewportHeight);
    $("#dim").css("width", viewportWidth);
    $("#dim").css("height", viewportHeight);
    if(currency > 1){
        document.getElementById("seconds").innerHTML = "You have " + formatNumber(currency) + " seconds";
    }
    else{
        document.getElementById("seconds").innerHTML = "You have " + formatNumber(currency) + " second";
    }
    if(tickleft <= 0){
        ticktocks += 1;
        tickleft = renewticks;
    }
    document.getElementById("showticks").innerHTML = formatNumber(ticktocks) + " tick tocks"
    document.getElementById("nexttick").innerHTML = "Time left until next tick \n" + formatNumber(tickleft) + " seconds"
    if(!isascending && !gate){
        document.title = formatNumber(currency) + " seconds - Clock Room";
    }
    else if(isascending && !gate){
        document.title = "Ascending with " + formatNumber(ascendpoints) + " prestige points - Clock Room";
    }
    else if(!isascending && gate){
        document.title = (""+timeleftinseconds+"").toHHMMSS() + " left until gate opens"; 
    }
    if(isascending){
        updateascendupgrades();
        document.getElementById("showprestige").innerHTML = "You have " + formatNumber(ascendpoints) + " prestige points";
    }
    if(hu3b && !hu4b && !isascending){
        document.getElementById("shop").style.display = "block";
        document.getElementById("sacrificetext").style.display = "none";
        document.getElementById("sacrificebutton").style.display = "block";
    }
    if(!hu3b && hu4b && !isascending){
        document.getElementById("shop").style.display = "block";
        document.getElementById("sacrificetext").style.display = "block";
        document.getElementById("sacrificebutton").style.display = "none";
    }
    if(hu3b && hu4b && !isascending){
        document.getElementById("shop").style.display = "block";
        document.getElementById("sacrificetext").style.display = "none";
        document.getElementById("sacrificebutton").style.display = "block";
    }
    if(!hu3b && !hu4b && !isascending){
        document.getElementById("shop").style.display = "none";
    }
    if(hu4b && !isascending && !percentgot){
        document.getElementById("showhowmuch").innerHTML = "You can get " + formatNumber(currency10percent);
        document.getElementById("onerewindpastmoney").style.display = "block";
    }
    else if(!hu4b && !isascending && !percentgot){
        document.getElementById("showhowmuch").innerHTML = "You don't have this upgrade yet!";
        document.getElementById("onerewindpastmoney").style.display = "none";
    }
    else if(hu4b && !isascending && percentgot){
        document.getElementById("showhowmuch").innerHTML = "You already got your 10%";
        document.getElementById("onerewindpastmoney").style.display = "none";
    }
    document.getElementById("multiplier").innerHTML = parseFloat(multiplier.toFixed(2)) + "x multiplier";
    document.getElementById("multilv").innerHTML = "LV. " + formatNumber(multiplierlevel);
    document.getElementById("upgradevalue").innerHTML = "Upgrade \n" + formatNumber(upgrademultivalue);
    document.getElementById("sacrificemulti").innerHTML = "Sacrifice \n" + formatNumber(sacrificemultipliercost) + "x";
    document.getElementById("tocklv").innerHTML = "LV. " + formatNumber(cheaperticktockslv);
    document.getElementById("tockupgradevalue").innerHTML = "Upgrade \n" + formatNumber(cheaperticktockscost);
    if(gate){
        document.getElementById("timeleft").innerHTML = (""+timeleftinseconds+"").toHHMMSS();
        document.getElementById("shardsamount").innerHTML = formatNumber(shards) + " shards";
        document.getElementById("dustamount").innerHTML = formatNumber(dust) + " dust";
        document.getElementById("shardcrushingcost").innerHTML = formatNumber(shardcrushingcost) + " Shards";
        document.getElementById("smeltindustcost").innerHTML = formatNumber(dustsmeltingcost) + " Dust";
        document.getElementById("howmuchkeydone").innerHTML = parseFloat(completiontowardskey.toFixed(1)) + "% Key done";
        document.getElementById("news").innerHTML = messages[currentmessage];
        if(shards == 0){
            shards = 1;
        }
        if(shards > 1 && shards < 3 && timeleftinseconds != 0){
            currentmessage = 1;
        }
        if(shards > 2 && shards < 21 && timeleftinseconds != 0){
            currentmessage = 2;
        }
        if(shards > 20 && dust < 101 && timeleftinseconds != 0){
            currentmessage = 3;
        }
        if(dust > 100 && dust < 10001 && timeleftinseconds != 0){
            currentmessage = 4;
        }
        if(dust > 10001 && !iskey && timeleftinseconds != 0){
            currentmessage = 5;
            issmelteravailable = true;
        }
        if(iskey && timeleftinseconds == 0){
            currentmessage = 6;
        }
        if(timeleftinseconds == 0){
            document.getElementById("untilgateopens").innerHTML = "It's open";
            currentmessage = 7;
        }
        if(issmelteravailable){
            document.getElementById("smelter").style.display = "block";
        }
        if(completiontowardskey >= 100){
            completiontowardskey = 100;
            iskey = true;
        }
        if(!onesoundofgate && timeleftinseconds == 0){
            onesoundofgate = true;
            gate_open_sound();
        }
    }
    if(isbottlephase){
        document.getElementById("flaskupgrades").style.display = "block";
        document.getElementById("ascendinstructions").innerHTML = "Deposit your prestige into flask and go back in time for more prestige";
        document.getElementById("capacity").innerHTML = "Flask capacity is: " + formatNumber(bottlecapacity);
        document.getElementById("fillpercentage").innerHTML = "Left percent to fill: " + (100 - bottlepercent) + "%";
        document.getElementById("depositedprestige").innerHTML = "Flask contains " + formatNumber(filledbottlenotpercent) + " prestige";
        document.getElementById("fclv").innerHTML = "Increase capacity of flask <br> Current capacity: " + formatNumber(bottlecapacity);
        document.getElementById("fglv").innerHTML = "Multiply your prestige that is going into flask <br> Current multiplier:  " + parseFloat(gainingfromticks.toFixed(2));
        document.getElementById("fgcost").innerHTML = "Upgrade " + formatNumber(gainingincreasecost);
        document.getElementById("fccost").innerHTML = "Upgrade " + formatNumber(capacityincreascecost);
        if(isbottlefilled){
            document.getElementById("flaskready").innerHTML = "Flask is ready";
            document.getElementById("drinkflask").style.display = "block";
        }
        else{
            document.getElementById("flaskready").innerHTML = "Flask is not ready";
            document.getElementById("drinkflask").style.display = "none";
        }
    }
    else{
        document.getElementById("flaskupgrades").style.display = "none";
        document.getElementById("ascendinstructions").innerHTML = "Pick your desired upgrades and go back in time for more prestige";
    }
},100)
// Update the look of ascend upgrades when looking at tree
function updateascendupgrades(){
    if(hu1b){
        document.getElementById("hu1b").style.display = "none";
    }
    if(!hu2){
        document.getElementById("hu2").style.display = "none";
    }
    else{
        document.getElementById("hu2").style.display = "block";
    }
    if(hu2b){
        document.getElementById("hu2b").style.display = "none";
    }
    if(!hu3){
        document.getElementById("hu3").style.display = "none";
    }
    else{
        document.getElementById("hu3").style.display = "block";
    }
    if(hu3b){
        document.getElementById("hu3b").style.display = "none";
    }
    if(!hu4){
        document.getElementById("hu4").style.display = "none";
    }
    else{
        document.getElementById("hu4").style.display = "block";
    }
    if(hu4b){
        document.getElementById("hu4b").style.display = "none";
    }
    if(!hu5){
        document.getElementById("hu5").style.display = "none";
    }
    else{
        document.getElementById("hu5").style.display = "block";
    }
    if(hu5b){
        document.getElementById("hu5b").style.display = "none";
    }
    if(!hu6){
        document.getElementById("hu6").style.display = "none";
    }
    else{
        document.getElementById("hu6").style.display = "block";
    }
    if(hu6b){
        document.getElementById("hu6b").style.display = "none";
    }
}
// Buttons
function upgrademulti(){
    upgrade_click_sound();
    if(currency >= upgrademultivalue){
        multiplierlevel += 1;
        multiplier += 0.1;
        currency -= upgrademultivalue;
        upgrademultivalue += (upgrademultivalue * 0.10)
    }
}
function cheaperticks(){
    upgrade_click_sound();
    if(currency >= cheaperticktockscost){
        if(cheaperticktockslv != 100){
            cheaperticktockslv += 1;
            renewticks -= 10;
            currency -= cheaperticktockscost;
            cheaperticktockscost += (cheaperticktockscost * 0.10)
        }
        else{
            alert("Cannot buy this upgrade because it's maxed out");
        }
    }
}
function sacrificemultiplier(){
    upgrade_click_sound();
    var predict = (multiplier - sacrificemultipliercost);
    if(predict >= 1){
        if(multiplier >= sacrificemultipliercost){
            currency += (100 * multiplier);
            multiplier -= sacrificemultipliercost;
            sacrificemultipliercost += 1;
        }
    }
}
function get10percent(){
    upgrade_click_sound();
    if(!percentgot){
        currency += currency10percent;
        percentgot = true;
    }
}
function clickshard(){
    shard_click_sound();
    if(gate && shards < 100000000000){
        shards += shards/2;
    }
    else if(shards > 100000000000){
        shards = 1;
    }
}
function crushshards(){
    if(gate){
        if(shards >= shardcrushingcost){
            crush_shard_sound();
            shards -= shardcrushingcost;
            shardcrushingcost += 1000;
            dust += 100;
        }
    }
}
function smeltdust(){
    if(gate){
        if(dust >= dustsmeltingcost && completiontowardskey != 100){
            smelt_dust_sound();
            dust -= dustsmeltingcost;
            dustsmeltingcost += 10;
            completiontowardskey += 0.5;
        }
    }
}
function endofdagame(){
    upgrade_click_sound();
    if(timeleftinseconds == 0){
        document.getElementById("gateprompt").style.display = "block";
    }
    else if(iskey && timeleftinseconds != 0){
        timeleftinseconds = 0;
    }
}
function endofdagameo1(){
    hide();
    document.getElementById("endtext").style.display = "block";
    document.getElementById("endtext2").style.display = "block";
}
function endofdagameo2(){
    gate = false;
    isbottlephase = true;
    document.getElementById("gateprompt").style.display = "none";
    document.getElementById("everything").style.display = "block";
    document.getElementById("ascendtree").style.display = "none";
    document.getElementById("gate").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("muchnews").style.display = "none";
    document.getElementById("ascendtree").style.display = "none";
}
function depositprestige(){
    if(isbottlephase && ascendpoints > 0){
        var r = confirm("This action will consume all of your prestige points. \n Proceed?")
        if(r){
            prestige_upgrade_click_sound();
            filledbottlenotpercent += (ascendpoints * gainingfromticks);
            ascendpoints = 0;
            if(filledbottlenotpercent > bottlecapacity){
                filledbottlenotpercent = bottlecapacity;
                bottlepercent = (filledbottlenotpercent / 5000) * 100;
            }
            else{
                bottlepercent = (filledbottlenotpercent / 5000) * 100;
            }
            if(bottlepercent == 100){
                isbottlefilled = true;
            }
        }
    }
    else{
        upgrade_click_sound();
    }
}
function upgradecapacity(){
    upgrade_click_sound();
    if(bottlecapacity < 5000){
        if(currency >= capacityincreascecost){
            currency -= capacityincreascecost;
            capacityincreascecost += 1000;
            bottlecapacity += 10;
        }
    }
    else{
        alert("Cannot buy this upgrade becuase it's maxed out")
    }
}
function upgradegainage(){
    upgrade_click_sound();
    if(currency >= gainingincreasecost){
        currency -= gainingincreasecost;
        gainingincreasecost += 10000;
        gainingfromticks += 0.1;
    }
}
function drink(){
    upgrade_click_sound();
    if(isbottlefilled){
        hide();
        $('#endtext2').css('left', '100px');
        document.getElementById("endtext").style.display = "block";
        document.getElementById("endtext2").innerHTML = "By drinking fluid from the flask you teleported to your reality and lived your whole life in peace";
        document.getElementById("endtext2").style.display = "block";
    }
}
// Ascend screen
function triggerascendscreen(){
    upgrade_click_sound();
    document.getElementById("ascend").style.display = "block";
}
function noascend(){
    upgrade_click_sound();
    document.getElementById("ascend").style.display = "none";
}
// Function for making numbers look beautifull
function formatNumber(n) {
    for (var i = 0; i < ranges.length; i++) {
       if (n >= ranges[i].divider) {
          return (Math.round((n * 100) / 100) / ranges[i].divider).toString() + ranges[i].suffix;
       }
    }
    return Math.round((n * 100) / 100).toString();
}
// Convert seconds to date
// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss/6313008#6313008
// Thank you for this code https://stackoverflow.com/users/22470/powtac
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}