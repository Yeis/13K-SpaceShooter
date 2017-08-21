var collisionManager = {
    rectangles: [],

    add: function(rectangle) {
        this.rectangles.push(rectangle);
    },

    update: function() {
        var length = this.rectangles.length;
        for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                var rect1 = this.rectangles[i];
                var rect2 = this.rectangles[j];

                if (rect1.overlaps(rect2)) {
                    rect1.invokeOnOverlap();
                    rect2.invokeOnOverlap();
                }
            }
        }
    }
}