function Spaceship(){
    this.gunSound = new TinyMusic.Sequence( new AudioContext(), 200, ['G3 e','A3 e'] );
    this.vortexSound = new TinyMusic.Sequence( new AudioContext(), 200, [
        'A3 e','A#3 e','B3 e','C4 e','B3 e','A#3 e','A3 e','A3 e','A#3 e','B3 e','C4 e','B3 e','A#3 e','A3 e','A3 e','A#3 e','B3 e','C4 e','B3 e','A#3 e','A3 e' ,'A3 e','A#3 e','B3 e','C4 e','B3 e','A#3 e','A3 e','A3 e','A#3 e','B3 e','C4 e','B3 e','A#3 e','A3 e'] );
    this.bombSound = new TinyMusic.Sequence( new AudioContext(), 200, ['A8 es','F3 h'] );
    this.itemSound = new TinyMusic.Sequence( new AudioContext(), 200, ['C5 e','C5 q'] );
    this.dyingSound = new TinyMusic.Sequence( new AudioContext(), 150, ['F#5 es','F5 es','F#5 es','G5 es','A#2 e','A#2 e','A#2 e','A#2 e','A#2 e','A#2 e'] );
    
    this.pressingSpace = false;
    this.projectiles = [];
    this.sprite = kontra.sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        dx:3.5,
        dy:3.5,
        color: 'red',  // fill color of the sprite rectangle
        width: 40,     // width and height of the sprite rectangle
        height: 20,
        update: function(){
            if (kontra.keys.pressed('up')) {
                this.y -= this.dy;
            }
            else if (kontra.keys.pressed('down')) {
                this.y += this.dy;
            }
    
            if (kontra.keys.pressed('left')) {
                this.x -= this.dx;
            }
            else if (kontra.keys.pressed('right')) {
                this.x += this.dx;
            }}
      });
    
    //clamp position
    this.sprite.position.clamp(0, 0, (kontra.canvas.width / 2 )- this.sprite.width, kontra.canvas.height - this.sprite.height);

    this.shoot = function() {
        var projectile = new LaserProjectile(40, 15);
        projectile.activate(this.sprite.x, this.sprite.y, 0, 15);
        this.projectiles.push(projectile);
        this.gunSound.play();
    }
    this.shootBomb = function(){
        this.bombSound.play();
    }
    this.getItem =  function(){
        this.itemSound.play();
    }
    
    this.update = function(){
        if (kontra.keys.pressed('space')) {
            if (!this.pressingSpace) {
                this.shoot();
            }
            this.pressingSpace = true;
        }
        else if(kontra.keys.pressed('b')){
            if(!this.pressingSpace){
                this.shootBomb();
            }
        }
        else if(kontra.keys.pressed('d')){
            if(!this.pressingSpace){
                this.die();
            }
        }
        else if(kontra.keys.pressed('v')){
            if(!this.pressingSpace){
                this.vortexSound.play();
            }
        }
        else if(kontra.keys.pressed('i')){
            if(!this.pressingSpace){
                this.getItem();
            }
        }
        else {
            this.pressingSpace = false;
        }
        this.sprite.update();
        this.updateProjectiles();
    };
    this.die = function(){
        this.dyingSound.play();
    }
    this.updateProjectiles = function() {
        for (var i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].update();
        }
    }

    this.render =  function(){
        this.sprite.render();
        this.renderProjectiles();
    };

    this.renderProjectiles = function() {
        for (var i = 0; i < this.projectiles.length; i++) {
            this.projectiles[i].render();
        }
    }

    this.setupSound = function(){
        //setup of gunSound
        this.gunSound.loop = false;
        this.gunSound.mid.frequency.value = 2000;
        this.gunSound.mid.gain.value = 5;
        this.gunSound.staccato = 0.55;
        this.gunSound.smoothing = 0.4;
        //setup of bombSound
        this.bombSound.loop = false 
        this.bombSound.staccato = 0.80;
        this.bombSound.smoothing = 0.4;
        //setup of itemSound
        this.itemSound.loop = false 
        this.itemSound.staccato = 0.5;
        this.itemSound.smoothing = 0.4;
        //setup of vortexSound
        this.vortexSound.loop = false 
        this.vortexSound.staccato = 0.55;
        this.vortexSound.smoothing = 0.4;
        //setup dyingSound
        this.dyingSound.loop = false 
        this.dyingSound.staccato = 0.95;
        this.dyingSound.smoothing = 0.4
        
        

    }

    this.setupSound();
    
}
