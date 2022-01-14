// Script for playing sounds in the game
// Script uses howler.js
function upgrade_click_sound(){
    var sound = new Howl({
        src: ['src/click_upgrade.wav']
    });
    sound.play();
}
function prestige_upgrade_click_sound(){
    var sound = new Howl({
        src: ['src/click_prestige_upgrade.wav']
    });
    sound.play();
}
function shard_click_sound(){
    var sound = new Howl({
        src: ['src/click_shard.wav']
    });
    sound.play();
}
function crush_shard_sound(){
    var sound = new Howl({
        src: ['src/crush_shard.wav']
    });
    sound.play();
}
function smelt_dust_sound(){
    var sound = new Howl({
        src: ['src/click_smelting_dust.wav']
    });
    sound.play();
}
function gate_open_sound(){
    var sound = new Howl({
        src: ['src/click_open_gate.wav']
    });
    sound.play();
}