kontra.init();

var spaceship = new Spaceship();
var width = kontra.canvas.width , height = kontra.canvas.height;
function movementSetup(){
    kontra.keys.bind('left',()=>{ spaceship.move('left');});
    kontra.keys.bind('right',()=>{spaceship.move('right');});
    kontra.keys.bind('up',()=>{spaceship.move('up');});
    kontra.keys.bind('down',()=>{spaceship.move('down');});
    
}

var loop = kontra.gameLoop({  // create the main game loop
    update: function() { 
        
        movementSetup();
       
        // update the game state
        spaceship.update();

        // wrap the sprites position when it reaches
        // the edge of the screen
        // if (sprite.x > kontra.canvas.width) {
        //     sprite.x = -sprite.width;
        // }
    },
    render: function() {        // render the game state
        spaceship.render();
    }
});

loop.start();    // start the gam