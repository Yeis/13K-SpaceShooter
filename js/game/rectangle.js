function Rectangle(x, y, width, height) {
    this.colors = {
        default: 'aqua',
        overlap: 'red'
    }
    this.width = width;
    this.height = height;
    this.sprite = kontra.sprite({
        x: x,
        y: y,
        color: this.colors.default,
        width: width,
        height: height,
    });

    this.left = function() {
        return this.sprite.x;
    }

    this.right = function() {
        return this.sprite.x + this.width;
    }

    this.top = function() {
        return this.sprite.y;
    }

    this.bottom = function() {
        return this.sprite.y + this.height;
    }

    this.overlaps = function(other) {
        return this.overlapsX(other) && this.overlapsY(other); 
    }

    this.overlapsX = function(other) {
        return !(this.left() > other.right() || this.right() < other.left());
    }

    this.overlapsY = function(other) {
        return !(this.top() > other.bottom() || this.bottom() < other.top());
    }

    this.invokeOnOverlap = function() {
        this.sprite.color = this.colors.overlap;
    }

    this.update = function() {
        this.sprite.color = this.colors.default;
        this.sprite.update();
    }

    this.render = function() {
        this.sprite.render();
    }
}