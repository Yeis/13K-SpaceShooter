kontra.init();

var rectangle1 = new Rectangle(20, 20, 32, 32);
var rectangle2 = new Rectangle(100, 30, 40, 40);
var speed = 1.5;

collisionManager.add(rectangle1);
collisionManager.add(rectangle2);

var handleInput = function() {
    // Movement in X
    if (kontra.keys.pressed('left')) {
        rectangle1.sprite.dx = -speed;
    }
    else if (kontra.keys.pressed('right')) {
        rectangle1.sprite.dx = speed;
    }
    else {
        rectangle1.sprite.dx = 0;
    }

    // Movement in Y
    if (kontra.keys.pressed('up')) {
        rectangle1.sprite.dy = -speed;
    }
    else if (kontra.keys.pressed('down')) {
        rectangle1.sprite.dy = speed;
    }
    else {
        rectangle1.sprite.dy = 0;
    }
}

var loop = kontra.gameLoop({  // create the main game loop
    update: function() {        // update the game state
        handleInput();
        rectangle1.update();
        rectangle2.update();
        collisionManager.update();
    },
    render: function() {        // render the game state
        rectangle1.render();
        rectangle2.render();
    }
});

loop.start();    // start the game