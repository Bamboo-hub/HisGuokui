class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.main = GuaBg.new(game, 'main')
        this.addElement(this.main)
        this.clickscene()
    }
    clickscene() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        // 抽卡动画分解动作
        // 按钮变白一秒 然后恢复
        // 整个画面渐入变白
        // 切换场景
        // 出现随机卡牌
        var self = this
        var w = self.game.canvasWidth
        var h = self.game.canvasHeight
        var left = w/100*33.5
        var right = w/100*66.3
        var top = h/100*85.2
        var bottom = h/100*91.1
        var mainClick = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (x > left && x < right && y > top && y < bottom) {
                var w = MainTransition.new(self.game)
                self.addElement(w)
                self.game.canvas.removeEventListener('click', mainClick)
            }
        }
        this.game.canvas.addEventListener('click', mainClick)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
