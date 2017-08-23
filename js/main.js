kontra.init();

var collider1 = new Collider(20, 20, 32, 32);
var collider2 = new Collider(100, 30, 40, 40);
var speed = 1.5;

collisionManager.add(collider1);
collisionManager.add(collider2);

var handleInput = function() {
    // Movement in X
    if (kontra.keys.pressed('left')) {
        collider1.setDx(-speed);
    }
    else if (kontra.keys.pressed('right')) {
        collider1.setDx(speed);
    }
    else {
        collider1.setDx(0);
    }

    // Movement in Y
    if (kontra.keys.pressed('up')) {
        collider1.setDy(-speed);
    }
    else if (kontra.keys.pressed('down')) {
        collider1.setDy(speed);
    }
    else {
        collider1.setDy(0);
    }
}

var loop = kontra.gameLoop({  // create the main game loop
    update: function() {        // update the game state
        handleInput();
        collider1.update();
        collider2.update();
        collisionManager.update();
    },
    render: function() {        // render the game state
        collider1.render();
        collider2.render();
    }
});

loop.start();    // start the game