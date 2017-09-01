function Spaceship(){
    this.sprite = kontra.sprite({
        x: 100,        // starting x,y position of the sprite
        y: 80,
        dx:10,
        dy:10,
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
      
 
    this.update = function(){
        this.sprite.update();
    };
    this.render =  function(){
        this.sprite.render();
    };
}
