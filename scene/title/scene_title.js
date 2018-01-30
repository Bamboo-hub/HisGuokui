class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.one = GuaBg.new(game, 'one')
        this.addElement(this.one)
        // var blast = BlastSystem.new(game)
        // this.addElement(blast)
        this.progressbar()
        this.clickscene()
    }
    progressbar() {
        var self = this
        var w = self.game.canvas.width
        var h = self.game.canvas.height
        // 150 是文字大概的宽度，因为无法得到准确的数据所以只能手动测量
        var textX = (w - 350) / 2
        var textY = h/100*90.9
        var text = "点击任意区域进入活动页面"
        var t = GuaLabel.new(self.game, text, textX, textY, "#fd9dab", 30)
        this.addElement(t)

        // 使用图片载入的方法
        // var t = GuaImage.new(self.game, 'text')
        // var tw = t.texture.width
        // t.x = (w - tw) / 2
        // t.y = h/100*90.9
        // log("width", t.x)
        // this.addElement(t)
    }
    clickscene() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        // 抽卡动画分解动作
        // 按钮变白一秒 然后恢复
        // 整个画面渐入变白
        // 切换场景
        // 出现随机卡牌
        var self = this
        var randomPoker = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            var w = SceneMain.new(self.game)
            self.addElement(w)
            self.game.canvas.removeEventListener('click', randomPoker)
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
