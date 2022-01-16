# Moding
You can mod Clock Room in every aspect you might ever want!
Just follow a few things every mod needs to have
## Required code
```js
function initializemod(name){
  if(name == "yourmodnameinshort"){
    someactivationfunction();
  }
}
function someactivationfunction(){
  alert("Hello World!")
}
```
Mod name is required for loader to call your mod after loading it
## How to load mods
Use this code in console
```js
loadmod("https://example.com/mymod.js","mymod");
```
## Example mods
I wrote some example mods for you to better understand how they work

This mod after loading asks you a question if the number is equal to 1
```js
// Example mod for Clock Room
function initializemod(name){
    if(name == "example"){ // Mod name
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
```

This mod after loading and pressing space will alert you that you pressed space
```js
// Example mod for Clock Room
var check = false;
function initializemod(name){
    if(name == "example2"){ // Mod name
        check = true;
    }
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 32 && check) {
        alert("You pressed space!");
    }
};
```

I think you know how mods in Clock Room work now right?
Also checkout [this mod](https://github.com/PouekDEV/Clock-Room-Incremental/blob/main/Moding/main.js)
## What next
Experiment! 
You can do everything you want there is no limit!
I will be very happy to see every mod everyone will create
