class WhiteOff {
    constructor(game) {
        // 场景过渡动画的前半部分，不同场景通用
        this.game = game
        this.alpha = 1
    }
    static new(game) {
        return new this(game)
    }
    draw() {
        var context = this.game.context
        context.save()

        context.globalAlpha = this.alpha

        context.fillStyle = "#ffffff"
        context.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height)

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
