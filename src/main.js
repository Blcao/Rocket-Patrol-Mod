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

