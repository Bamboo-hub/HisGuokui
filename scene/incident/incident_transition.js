class IncidentTransition {
    constructor(game, name) {
        // incident 至下一个界面的过渡动画
        this.game = game
        this.name = name
        this.alpha = 0
    }
    static new(...args) {
        return new this(...args)
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
        this.alpha += 0.05
        if (this.alpha >= 1) {
            var s = ScenePoker.new(self.game, self.name)
            self.game.replaceScene(s)
        }
    }
}
