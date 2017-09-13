function LaserProjectile(width, height) {
    this.width = width;
    this.height = height;
    this.collider = new Collider(0, 0, width, height);
    this.collider.tag = 'projectile';
    this.active = false;

    this.collider.onOverlap.push(function(other) {
        if (other.tag == 'enemy') {
            this.active = false;
        }
    });

    this.activate = function(x, y, angle, speed) {
        this.collider.setX(x);
        this.collider.setY(y);

        angleRadians = (-angle * Math.PI) / 180;
        this.collider.setDx(Math.cos(angleRadians) * speed);
        this.collider.setDy(Math.sin(angleRadians) * speed);

        collisionManager.add(this.collider);
        this.active = true;
    }

    this.update = function() {
        if (this.active) {
            this.collider.update();

            if (this.collider.sprite.x > kontra.canvas.width) {
                this.active = false;
            }
        }
    }

    this.render = function() {
        if (this.active) {
            this.collider.render();
        }
    }
}
