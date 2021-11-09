// There is a ton and I mean a TON of cookie clicker references so be aware of that I guess
// Loading page
document.getElementById("ascendtree").style.display = "none";
document.getElementById("ascend").style.display = "none";
document.getElementById("everything").style.display = "none";
document.onload = loading();
function loading(){
    document.getElementById("everything").style.display = "block";
    document.getElementById("loading").style.display = "none";
}
// Values that are saved
var currency = 0;
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
var isascending = false;
// Prestige upgrades
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
// Values that are not saved
//
// Ascending
function ascendstuff(){
    isascending = true;
    // Hide game
    document.getElementById("ascend").style.display = "none";
    document.getElementById("everything").style.display = "none";
    // Do maths
    currency = 0;
    multiplier = 0;
    startingmultiplier += (ticktocks / 100);
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
}
// Go back from ascend tree
function goback(){

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
    version: 0.1,
    vname: "Dev alpha",
    beta: 0,
    launch: ""
}
// Short numbers names
var ranges = [{
    divider: 1e18,
    suffix: 'Qua'
 },
 {
    divider: 1e15,
    suffix: 'Tri'
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
// Simulate Ticks (not offline)
setInterval(() => {
    if(!isascending){
        currency += (1 * multiplier);
        tickleft -= (1 * multiplier);
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
    if(!isascending){
        document.title = formatNumber(currency) + " seconds - Clock Room";
    }
    else{
        document.title = "Ascending with " + formatNumber(ascendpoints) + " prestige points - Clock Room";
    }
    if(isascending){
        updateascendupgrades();
        document.getElementById("showprestige").innerHTML = "You have " + formatNumber(ascendpoints) + " prestige points";
    }
    document.getElementById("multiplier").innerHTML = parseFloat(multiplier.toFixed(2)) + "x multiplier";
    document.getElementById("multilv").innerHTML = "LV. " + formatNumber(multiplierlevel);
    document.getElementById("upgradevalue").innerHTML = "Upgrade \n" + formatNumber(upgrademultivalue);
    document.getElementById("tocklv").innerHTML = "LV. " + formatNumber(cheaperticktockslv);
    document.getElementById("tockupgradevalue").innerHTML = "Upgrade \n" + formatNumber(cheaperticktockscost);
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
        cheaperticktockslv += 1;
        renewticks -= 10;
        currency -= cheaperticktockscost;
        cheaperticktockscost += (cheaperticktockscost * 0.10)
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