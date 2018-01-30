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
        this.game.canvas.addEventListener('click', function(event) {
            var x = event.offsetX
            var y = event.offsetY
        })
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
