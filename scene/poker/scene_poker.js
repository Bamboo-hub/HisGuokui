class ScenePoker extends GuaScene {
    constructor(game, name) {
        super(game)
        this.name = name
        this.poker = GuaBg.new(game, name)
        this.addElement(this.poker)
        var w = WhiteOff.new(game)
        this.addElement(w)
        this.clickscene()
    }
    clickscene() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        var self = this
        var w = self.game.canvasWidth
        var h = self.game.canvasHeight
        var left = w/100*4.5
        var right = w/100*18.9
        var top = h/100*90.9
        var bottom = h/100*99
        var pokerClick = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (x > left && x < right && y > top && y < bottom) {
                var w = SceneTitle.new(self.game)
                self.addElement(w)
                self.game.canvas.removeEventListener('click', pokerClick)
            }
        }
        this.game.canvas.addEventListener('click', pokerClick)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
