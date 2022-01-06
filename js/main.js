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
// (Gate phase values they count as values for saving)
var shards = 1;
var dust = 0;
var shardcrushingcost = 1000;
var dustsmeltingcost = 10;
var completiontowardskey = 0;
var currentmessage = 0;
var iskey = false;
var timeleftinseconds = 3602;
var issmelteravailable = false;
// Values that are not saved
var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
var ascendseconds = 0;
var cansave = false;
var importingsave = false;
var messages = ["You have one shard","You have two shards","Shards begin to duplicate","Shards surround you","You have a lot of dust","You think of smelting the dust","You have the key","Gate is open"]
// Test values and stuff (to be removed)
//currency = 10000
//ticktocks = 100000
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
        versionsave: GameID.version
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
        if(savecrypted != null){
            var savestringed = atob(savecrypted);
            var loadedclocksave = JSON.parse(savestringed)
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
            cansave = true;
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
                save();
                location.reload();
            }
        }   
    }
    if(importingsave){
        importingsave = false;
    }
}
function importsave(){
    importingsave = true;
    loadsave();
}
function exportsave(){
    save();
    var loadedclocksave = JSON.parse(localStorage.getItem("clockroomsave"));
    var stringsave = JSON.stringify(loadedclocksave);
    var basesave = btoa(stringsave);
    navigator.clipboard.writeText(basesave)
    setTimeout(() => {
        alert("Copied save to clipboard")
    },1000)
}
function deletesave(){
    var r = confirm("Do you want to delete save?")
    if(r){
        localStorage.removeItem("clockroomsave");
        location.reload();
    }
}
function checkgate(){
    if(viewportHeight >= 950 && viewportWidth >= 1800){
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
        alert("Sorry but your screen is too small \n Come back when you will have acces to some computer")
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
    document.getElementById("ascendtree").style.display = "block";
    document.getElementById("ap").style.display = "none";
    document.getElementById("setting").style.display = "none";
}
// Go back from ascend tree
function goback(){
    menumusic();
    // Set variables
    if(hu6b){
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
}
// Ascending buy upgrades functions
function buyhu1(){
    if(ascendpoints >= 1){
        ascendpoints -= 1;
        hu1b = true;
        hu2 = true;
        hu5 = true;
    }
}
function buyhu2(){
    if(ascendpoints >= 25){
        ascendpoints -= 25;
        hu2b = true;
        hu3 = true;
        hu4 = true;
    }
}
function buyhu3(){
    if(ascendpoints >= 100){
        ascendpoints -= 100;
        hu3b = true;
    }
}
function buyhu4(){
    if(ascendpoints >= 100){
        ascendpoints -= 100;
        hu4b = true;
    }
}
function buyhu5(){
    if(ascendpoints >= 500){
        hu5b = true;
        hu6 = true;
    }
}
function buyhu6(){
    if(ascendpoints >= 1000){
        hu6b = true;
    }
}
// Some game info
var GameID = {
    version: 0.8,
    vname: "Final alpha before beta",
    beta: 0,
    launch: ""
}
// Short numbers names
var ranges = [{
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
        }
    }
},30000)//30000 - 3s
setInterval(() => {
    if(cansave){
        if(!isascending){
            $('.slide-in').toggleClass('show');
        }
    }
},32000)
// Simulate Ticks
setInterval(() => {
    if(!isascending){
        currency += (1 * multiplier);
        tickleft -= (1 * multiplier);
    }
    if(gate && timeleftinseconds != 0){
        timeleftinseconds -= 1;
    }
},1000)
// Update displayed values
setInterval(() => {
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
    if(hu3b && !isascending){
        document.getElementById("shop").style.display = "block";
    }
    else{
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
    if(currency >= upgrademultivalue){
        multiplierlevel += 1;
        multiplier += 0.1;
        currency -= upgrademultivalue;
        upgrademultivalue += (upgrademultivalue * 0.10)
    }
}
function cheaperticks(){
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
    if(!percentgot){
        currency += currency10percent;
        percentgot = true;
    }
}
function clickshard(){
    if(gate){
        shards += shards/2;
    }
}
function crushshards(){
    if(gate){
        if(shards >= shardcrushingcost){
            shards -= shardcrushingcost;
            shardcrushingcost += 1000;
            dust += 100;
        }
    }
}
function smeltdust(){
    if(gate){
        if(dust >= dustsmeltingcost && completiontowardskey != 100){
            dust -= dustsmeltingcost;
            dustsmeltingcost += 10;
            completiontowardskey += 0.5;
        }
    }
}
function endofdagame(){
    if(timeleftinseconds == 0){
        hide();
        document.getElementById("endtext").style.display = "block";
        document.getElementById("endtext2").style.display = "block";
    }
    else if(iskey && timeleftinseconds != 0){
        timeleftinseconds = 0;
    }
}
// Ascend screen
function triggerascendscreen(){
    document.getElementById("ascend").style.display = "block";
}
function noascend(){
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
//alert("5678".toHHMMSS());