# Moding
You can mod Clock Room in every aspect you might ever want!
Just follow a few things every mod needs to have
## Required code
```js
function initializemod(name){
  if(name == "yourmodnameinshort"){
    modready("yourmodnameinshort");
    someactivationfunction();
  }
}
function someactivationfunction(){
  alert("Hello World!")
}
```
Mod name is required for loader to call your mod after loading it
## How to load mods
### Use this code in console (doesn't work on gamejolt or itch.io)
```js
loadmod("https://example.com/mymod.js","mymod");
```
### Loading mods method 2 (compatible with every version)
1. Click the wrench icon near upgrades\
![wrench](https://github.com/PouekDEV/Clock-Room-Incremental/blob/main/Moding/image_2022-01-23_161903.png?raw=true)
2. From the menu click "Load New" button\
![menu](https://github.com/PouekDEV/Clock-Room-Incremental/blob/main/Moding/image_2022-01-23_161922.png?raw=true)
3. Follow the instructions\
![instructionexample](https://github.com/PouekDEV/Clock-Room-Incremental/blob/main/Moding/image_2022-01-23_161940.png?raw=true)
### More explanation
Short mod name is used to call the mod and should be exactly the same as in the mods code
## Example mods
I wrote some example mods for better understanding how they work

This mod after loading asks you a question if the number is equal to 1
```js
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
```

This mod after loading and pressing space will alert you that you pressed space
```js
// Example mod for Clock Room
var check = false;
function initializemod(name){
    if(name == "example2"){ // Short mod name
        modready("example"); // Let modloader know that this mod is working
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
I will be very happy to see every mod created
