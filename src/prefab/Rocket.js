class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, player, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    
        // add object to existing scene
        scene.add.existing(this);
        this.player = player;
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
      }

    update(Rocket) {
        if(!Rocket.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                if (this.player == 'first') {
                Rocket.x -= Rocket.moveSpeed;
                }
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                if (this.player == 'first') {
                Rocket.x += Rocket.moveSpeed;
                }
            }
        }

        if(!Rocket.isFiring) {
            if(keyLEFT2.isDown && this.x >= borderUISize + this.width) {
                if (this.player == 'second') {
                Rocket.x -= Rocket.moveSpeed;
                }
            } else if(keyRIGHT2.isDown && this.x <= game.config.width - borderUISize - this.width) {
                if (this.player == 'second') {
                Rocket.x += Rocket.moveSpeed;
                }
            }
        }

        if(this.player == 'first') {
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
    }

    if(this.player == 'second') {
        if(Phaser.Input.Keyboard.JustDown(keyF2) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
    }

        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    
}

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - 2*borderPadding;
    }
}