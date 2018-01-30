class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.two = GuaBg.new(game, 'two')
        this.addElement(this.two)
        // this.white = White.new(game)
        // this.addElement(this.white)
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
        // var r = GuaRect.new(self.game, left, right, top, bottom)
        // self.addElement(r)
        var randomPoker = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log('点击', w, h, x, y)
            // log('是否达成条件', x > left, x < right, y > top, y < bottom,
            // 'x 和 y', x, y,
            // '左右上下', left, right, top, bottom)
            // 250, 496, 1134, 1219
            // left, right, top, bottom
            if (x > left && x < right && y > top && y < bottom) {
                // 加入按键点击效果
                // this.button_click = GuaImage.new(self.game, 'button_click')
                // this.button_click.x = 250
                // this.button_click.y = 1080
                // 加入过渡动画效果
                var w = MainTransition.new(self.game)
                self.addElement(w)
                // self.addElement(this.button_click)
                // var s = ScenePoker1.new(self.game, name)
                // self.game.replaceScene(s)
                // self.game.canvas.removeEventListener('click', randomPoker)
            }
        }
        this.game.canvas.addEventListener('click', randomPoker)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
