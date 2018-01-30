class GuaLabel {
    constructor(game, text, x, y, color, fillchar='10') {
        this.game = game
        this.text = text
        this.x = x
        this.y = y
        this.color = color
        this.font = `${fillchar}px 細明體_HKSCS`
        this.alpha = 1
        this.reduceAlpha = true
    }
    static new(...args) {
        var i = new this(...args)
        return i
    }
    draw() {
        var context = this.game.context
        context.save()

        context.fillStyle = this.color
        context.font = this.font
        context.globalAlpha = this.alpha
        context.fillText(this.text, this.x, this.y)

        context.restore()
    }
    update() {
        var self = this
        if (self.reduceAlpha) {
            self.alpha -= 0.02
            if (self.alpha <= 0.05) {
                self.reduceAlpha = false
            }
        } else {
            self.alpha += 0.02
            if (self.alpha >= 1) {
                self.reduceAlpha = true
            }
        }
    }
}
