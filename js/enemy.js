function Enemy(x , y , sprite){
    self = this;
    this.bottom = false;
    this.speed = 1 ;
    this.changeSideChance = 1;
    this.side =  1;
    this.collider = new Collider(x, y, 40, 30);
    this.collider.tag = 'enemy';
    this.hp = 100;
    this.active = true;
    this.sprite = kontra.sprite({
        x: x,        // starting x,y position of the sprite
        y: y,
        dx:5,
        dy:3 ,
        color: 'blue',  // fill color of the sprite rectangle
        width: 40,     // width and height of the sprite rectangle
        height: 20
        // update: function(){
        //     console.log(this);
        //    this.x -= this.speed;
        // //    if(Math.random(this.changeSideChance) > 0.3){
        // //        //we keep on the same side 
        // //        this.y = this.dy * this.side;
        // //        this.changeSideChance -= .1;
        // //    }else{
        // //        //we go to the other side and reset 
        // //        this.side = this.side * -1;
        // //        this.changeSideChance = 1;
        // //    }
    });
    //clamp position    
    this.sprite.position.clamp(0, 0, (kontra.canvas.width / 2 )- this.collider.sprite.width, kontra.canvas.height - this.collider.sprite.height);   
    this.sprite.position.clamp(0, 0, (kontra.canvas.width / 2 )- this.collider.sprite.width, kontra.canvas.height - this.collider.sprite.height);   

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
        // this.collider.render();
        this.sprite.render();
        if (this.active) {
            this.collider.render();
        }
    };
}