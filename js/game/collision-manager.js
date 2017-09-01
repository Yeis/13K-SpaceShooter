var collisionManager = {
    colliders: [],

    add: function(collider) {
        this.colliders.push(collider);
    },

    update: function() {
        var length = this.colliders.length;
        for (var i = 0; i < length; i++) {
            for (var j = i + 1; j < length; j++) {
                var collider1 = this.colliders[i];
                var collider2 = this.colliders[j];

                if (collider1.overlaps(collider2)) {
                    collider1.invokeOnOverlap(collider2);
                    collider2.invokeOnOverlap(collider1);
                }
            }
        }
    }
}