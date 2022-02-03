// Example mod for Clock Room
function initializemod(name){
    if(name == "example"){ // Short mod name
        modready("example"); // Let modloader know that this mod is working
        alertme();
    }
}
function alertme(){
    var r = confirm("Guess the number \n Does the number that I am thinking about now is equal to 1?'")
    if(r){
        alert("Congratulations!");
    }
    else{
        alert("Try again...");
        alertme();
    }
}