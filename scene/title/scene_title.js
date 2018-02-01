class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.title = GuaBg.new(game, 'title')
        this.addElement(this.title)
        // var blast = BlastSystem.new(game)
        // this.addElement(blast)
        this.removeimg()
        this.clickscene()
        this.progressbar()
    }
    removeimg() {
        var loading = document.querySelector('#loading')
        if (loading != null) {
            loading.remove()
        }
    }
    progressbar() {
        // 底部文字
        var self = this
        var w = self.game.canvas.width
        var h = self.game.canvas.height
        // 350 是文字大概的宽度，因为无法得到准确的数据所以只能手动测量
        var textX = (w - 350) / 2
        var textY = h/100*90.9
        var text = "点击任意区域进入活动页面"
        var t = GuaLabel.new(self.game, text, textX, textY, "#fd9dab", 30)
        this.addElement(t)
    }
    clickscene() {
        // 判断用户点击，进入相应场景
        var self = this
        var titleClick = function(event) {
            var w = SceneMain.new(self.game)
            self.addElement(w)
            self.game.canvas.removeEventListener('click', titleClick)
        }
        this.game.canvas.addEventListener('click', titleClick)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
