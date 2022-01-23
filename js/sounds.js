// Script for playing sounds in the game
// Script uses howler.js
// Load all sounds
var cu = new Howl({
    src: ['src/click_upgrade.wav']
});
var cpu = new Howl({
    src: ['src/click_prestige_upgrade.wav']
});
var cs = new Howl({
    src: ['src/click_shard.wav']
});
var cus = new Howl({
    src: ['src/crush_shard.wav']
});
var csd = new Howl({
    src: ['src/click_smelting_dust.wav']
});
var cog = new Howl({
    src: ['src/click_open_gate.wav']
});
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