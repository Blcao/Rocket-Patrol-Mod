/*
Name: Brian Cao
Project: Rocket Patrol Mod
Date: 4/22/21
Time Invested So Far: 11 hours

Points Breakdown:
parallax scrolling - 10
Display timer - 10
Add time per hit - 20 
new, faster ship that's worth more points - 20
simultaneous co-op - 30
new assets for rockets and spaceships (still need to make explosion animation) - 20
*/

console.log("hello from main.js");
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyF2, keyLEFT2, keyRIGHT2;

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

