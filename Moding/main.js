var canupdate = false;
var inserted_detail_thing = false;
var seconds = 0;
function initializemod(name){
    if(name == "ultradetail"){
	modready("ultradetail");
        canupdate = true;
        var detailthing = document.createElement("P");
        var text = document.createTextNode("Ultra Detail Mod v0.1");
        detailthing.appendChild(text);
        detailthing.setAttribute("id","UDMspace")
        detailthing.setAttribute("class","multi glow")
        detailthing.setAttribute("style","font-size:15px;")
        document.getElementById("formods").appendChild(detailthing);
        inserted_detail_thing = true;
    }
}
setInterval(() => {
    seconds += 1;
    if(canupdate && inserted_detail_thing){
        var loadedclocksave = JSON.parse(localStorage.getItem("clockroomsave"));
        document.getElementById("UDMspace").innerHTML = "Ultra Detail Mod v0.1 <br> Time since mod initialised: " + seconds + "<br> Seconds you get every 10 seconds: " + formatNumber((loadedclocksave.multiplier*10)) + "<br> Seconds you get every minute: " + formatNumber((loadedclocksave.multiplier*60));
    }
},1000)