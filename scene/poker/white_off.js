class WhiteOff {
    constructor(game) {
        this.game = game
        // this.frames = []
        this.animations = {
            idle: [],
        }
        for (var i = 0; i < 3; i++) {
            var name = 'white'
            var t = game.textureByName(name)
            // this.frames.push(t)
            this.animations['idle'].push(t)
        }
        // this.texture = this.frames[0]
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height

        this.alpha = 1
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    draw() {
        var context = this.game.context
        context.save()

        context.globalAlpha = this.alpha

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }
    update() {
        var self = this
        this.alpha -= 0.05
        if (this.alpha <= 0) {
            deleteElement(self)
        }
    }
}
