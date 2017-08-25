kontra.init();

var spaceship = new Spaceship();
var width = kontra.canvas.width , height = kontra.canvas.height;
kontra.keys.bind(['up', 'down', 'left', 'right'], function(e) {
    e.preventDefault();
  });


var loop = kontra.gameLoop({  // create the main game loop
    update: function() { 
               
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