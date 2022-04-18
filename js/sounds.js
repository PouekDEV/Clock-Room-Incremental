// Script for playing sounds in the game
// Script uses howler.js
var cu;
var cpu;
var cs;
var cus;
var csd;
var cog;
// Load all sounds after clicking
function loadsoundsafterclick(){
    cu = new Howl({
        src: ['src/click_upgrade.wav']
    });
    cpu = new Howl({
        src: ['src/click_prestige_upgrade.wav']
    });
    cs = new Howl({
        src: ['src/click_shard.wav']
    });
    cus = new Howl({
        src: ['src/crush_shard.wav']
    });
    csd = new Howl({
        src: ['src/click_smelting_dust.wav']
    });
    cog = new Howl({
        src: ['src/click_open_gate.wav']
    });
}
// Functions to play sounds
function upgrade_click_sound(){
    cu.play();
}
function prestige_upgrade_click_sound(){
    cpu.play();
}
function shard_click_sound(){
    cs.play();
}
function crush_shard_sound(){
    cus.play();
}
function smelt_dust_sound(){
    csd.play();
}
function gate_open_sound(){
    cog.play();
}