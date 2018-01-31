class MainTransition {
    constructor(game) {
        // main 至下一个界面的过渡动画
        this.game = game
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
            var randomInt = randomBetween(1, 14)
            var name = `incident${randomInt}`
            var s = SceneIncident.new(self.game, name)
            self.game.replaceScene(s)
        }
    }
}
