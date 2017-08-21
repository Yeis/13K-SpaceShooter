function Spaceship(){
    this.sprite = kontra.sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        color: 'red',  // fill color of the sprite rectangle
        width: 40,     // width and height of the sprite rectangle
        height: 20
      });
      this.speed = 10;
    this.move = function(direction){
        switch(direction){
            case 'left':
                this.sprite.x-=(3 * this.speed);
                if(this.sprite.x < 0) this.sprite.x = 0;                              
                break;
            case 'right':
                this.sprite.x+=(3 * this.speed);
                if(this.sprite.x > ((kontra.canvas.width / 2) - this.sprite.width)) this.sprite.x = ((kontra.canvas.width / 2) - this.sprite.width);                                             
                break;
            case 'up':
                this.sprite.y-=(3 * this.speed);
                if(this.sprite.y < 0) this.sprite.y = 0;                              
                break;
            case 'down':
            this.sprite.y+=(3 * this.speed); 
            if(this.sprite.y > (kontra.canvas.height - this.sprite.height)) this.sprite.y = kontra.canvas.height - this.sprite.height;                                          
            break;
        }
    }
    this.update = function(){
        this.sprite.update();
    };
    this.render =  function(){
        this.sprite.render();
    };
}
