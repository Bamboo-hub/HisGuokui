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
        // 坐标分别是左、右、上、下
        // 三个选项的有效点击范围分别是：
        var one = [
            [w/100*7.2, w/100*92.7, h/100*40, h/100*45.4],
            [w/100*7.2, w/100*92.7, h/100*51.3, h/100*56.7],
            [w/100*7.2, w/100*92.7, h/100*62.5, h/100*67.8],
        ]
        var two = [
            [w/100*7.2, w/100*92.7, h/100*51.3, h/100*56.7],
            [w/100*7.2, w/100*92.7, h/100*40, h/100*45.4],
            [w/100*7.2, w/100*92.7, h/100*62.5, h/100*67.8],
        ]
        var three = [
            [w/100*7.2, w/100*92.7, h/100*62.5, h/100*67.8],
            [w/100*7.2, w/100*92.7, h/100*40, h/100*45.4],
            [w/100*7.2, w/100*92.7, h/100*51.3, h/100*56.7],
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
        this.left = o[self.name][0][0]
        this.right = o[self.name][0][1]
        this.top = o[self.name][0][2]
        this.bottom = o[self.name][0][3]

        this.errorLeft = o[self.name][1][0]
        this.errorRight = o[self.name][1][1]
        this.errorTop = o[self.name][1][2]
        this.errorBottom = o[self.name][1][3]

        this.errorLeft1 = o[self.name][2][0]
        this.errorRight1 = o[self.name][2][1]
        this.errorTop1 = o[self.name][2][2]
        this.errorBottom1 = o[self.name][2][3]
        // var r = GuaRect.new(self.game, this.left, this.right, this.top, this.bottom)
        // self.addElement(r)
        // var rr = GuaRect.new(self.game, this.errorLeft, this.errorRight, this.errorTop, this.errorBottom)
        // self.addElement(rr)
        // var rrr = GuaRect.new(self.game, this.errorLeft1, this.errorRight1, this.errorTop1, this.errorBottom1)
        // self.addElement(rrr)
    }
    clickscene() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        var self = this
        var selectSolution = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (x > self.left && x < self.right && y > self.top && y < self.bottom) {
                log('点击正确答案')
                var index = self.name.slice(8)
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', selectSolution)
            } else if (x > self.errorLeft1 && x < self.errorRight1 && y > self.errorTop1 && y < self.errorBottom1) {
                log('点击错误答案')
                var index = 15
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', selectSolution)
            } else if (x > self.errorLeft && x < self.errorRight && y > self.errorTop && y < self.errorBottom) {
                log('点击错误答案')
                var index = 15
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', selectSolution)
            } else {
                log('点击范围无效')
            }
            // 还需要添加一个点击在错误答案的选项
        }
        this.game.canvas.addEventListener('click', selectSolution)
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
