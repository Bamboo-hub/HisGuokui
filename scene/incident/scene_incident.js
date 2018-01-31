class SceneIncident extends GuaScene {
    constructor(game, name) {
        super(game)
        this.name = name
        this.incident = GuaBg.new(game, name)
        this.addElement(this.incident)
        var w = WhiteOff.new(game)
        this.addElement(w)
        this.solution()
        this.clickscene()
    }
    solution() {
        var self = this
        var w = self.game.canvasWidth
        var h = self.game.canvasHeight
        // 十四道题的答案点击范围设置
        // 坐标分别是上、下
        // 三个选项的有效点击范围分别是：
        var one = [
            [h/100*40, h/100*45.4],
            [h/100*51.3, h/100*56.7],
            [h/100*62.5, h/100*67.8],
        ]
        var two = [
            [h/100*51.3, h/100*56.7],
            [h/100*40, h/100*45.4],
            [h/100*62.5, h/100*67.8],
        ]
        var three = [
            [h/100*62.5, h/100*67.8],
            [h/100*40, h/100*45.4],
            [h/100*51.3, h/100*56.7],
        ]

        var o = {
            'incident1': one,
            'incident2': two,
            'incident3': three,
            'incident4': two,
            'incident5': three,
            'incident6': one,
            'incident7': one,
            'incident8': one,
            'incident9': two,
            'incident10': two,
            'incident11': two,
            'incident12': two,
            'incident13': one,
            'incident14': one,
        }
        // 字符串中含有数字，因此无法用点语法访问
        this.left = w/100*7.2
        this.right = w/100*92.7
        this.top = o[self.name][0][0]
        this.bottom = o[self.name][0][1]

        this.errorTop = o[self.name][1][0]
        this.errorBottom = o[self.name][1][1]

        this.errorTop1 = o[self.name][2][0]
        this.errorBottom1 = o[self.name][2][1]
        // var r = GuaRect.new(self.game, this.left, this.right, this.top, this.bottom)
        // self.addElement(r)
        // var rr = GuaRect.new(self.game, this.errorLeft, this.errorRight, this.errorTop, this.errorBottom)
        // self.addElement(rr)
        // var rrr = GuaRect.new(self.game, this.errorLeft1, this.errorRight1, this.errorTop1, this.errorBottom1)
        // self.addElement(rrr)
    }
    selectsolution(x, y, top, bottom) {
        var self = this
        return x > self.left && x < self.right && y > top && y < bottom
    }
    clickscene() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        var self = this
        var incidentClick = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            // log('click', self.selectsolution(x, y, self.top, self.bottom))
            if (self.selectsolution(x, y, self.top, self.bottom)) {
                log('点击正确答案')
                var index = self.name.slice(8)
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            } else if (self.selectsolution(x, y, self.errorTop, self.errorBottom)) {
                log('点击错误答案')
                var index = 15
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            } else if (self.selectsolution(x, y, self.errorTop1, self.errorBottom1)) {
                log('点击错误答案')
                var index = 15
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            } else {
                log('点击范围无效')
            }
        }
        this.game.canvas.addEventListener('click', incidentClick)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
