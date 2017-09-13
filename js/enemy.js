function Enemy(x , y , sprite){
    self = this;
    this.bottom = false;
    this.collider = new Collider(x, y, 40, 30);
    this.collider.tag = 'enemy';
    this.hp = 100;
    this.active = true;
    this.sprite = kontra.sprite({
        x: x,        // starting x,y position of the sprite
        y: y,
        dx:5,
        dy:5,
        color: 'blue',  // fill color of the sprite rectangle
        width: 40,     // width and height of the sprite rectangle
        height: 20,
        update: function(){
           //randomly move up and down 
           if(this.bottom === false){
           this.y += this.dy;
           }else{
            this.y -= this.dy;
           }
           if(this.y === kontra.canvas.height - 40 || this.y === 0){
               this.bottom =  !this.bottom;
           }
        }
    });

    this.collider.onOverlap.push(function(other) {
        if (other.tag == 'projectile') {
            other.active = false;
            self.hp -= 50;
            console.log('collided');

            if (self.hp <= 0) {
                self.active = false;
                self.collider.active = false;
            }
        }
    });

    //clamp position
    this.collider.sprite.position.clamp(0, 0, (kontra.canvas.width / 2 )- this.collider.sprite.width, kontra.canvas.height - this.collider.sprite.height);   
    this.update = function(){
        if (this.active) {
            this.collider.update();
        }
    };
    this.render =  function(){
        if (this.active) {
            this.collider.render();
        }
    };
}