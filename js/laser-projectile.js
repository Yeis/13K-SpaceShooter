function LaserProjectile(width, height) {
    this.colors = {
        default: 'aqua',
    }
    this.width = width;
    this.height = height;
    this.sprite = kontra.sprite({
        x: 0,
        y: 0,
        color: this.colors.default,
        width: width,
        height: height,
    });
    this.active = false;

    this.activate = function(x, y, angle, speed) {
        this.sprite.x = x;
        this.sprite.y = y;

        angleRadians = (-angle * Math.PI) / 180;
        this.sprite.dx = Math.cos(angleRadians) * speed;
        this.sprite.dy = Math.sin(angleRadians) * speed;

        this.active = true;
    }

    this.update = function() {
        if (this.active) {
            this.sprite.update();

            if (this.sprite.x > kontra.canvas.width) {
                this.active = false;
            }
        }
    }

    this.render = function() {
        if (this.active) {
            this.sprite.render();
        }
    }
}
