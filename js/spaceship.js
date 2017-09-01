function Spaceship(){
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
    }
    
    this.update = function(){
        if (kontra.keys.pressed('space')) {
            if (!this.pressingSpace) {
                this.shoot();
            }
            this.pressingSpace = true;
        }
        else {
            this.pressingSpace = false;
        }
        this.sprite.update();
        this.updateProjectiles();
    };

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
}
