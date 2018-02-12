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
            'incident1': three,
            'incident2': two,
            'incident3': one,
            'incident4': one, //
            'incident5': three,
            'incident6': two,
            'incident7': three,
            'incident8': two,
            'incident9': one, //
            'incident10': three,
            'incident11': one,
            'incident12': one,
            'incident13': three,
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
    }
    selectsolution(x, y, top, bottom) {
        var self = this
        return x > self.left && x < self.right && y > top && y < bottom
    }
    selectanswer() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        var self = this
        var incidentClick = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (self.selectsolution(x, y, self.top, self.bottom)) {
                var index = self.name.slice(8)
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            } else if (self.selectsolution(x, y, self.errorTop, self.errorBottom)) {
                var index = 14
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            } else if (self.selectsolution(x, y, self.errorTop1, self.errorBottom1)) {
                var index = 14
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            }
        }
        this.game.canvas.addEventListener('click', incidentClick)
    }
    selectanswer2() {
        // 判断用户点击的位置，必须点到规定内的位置，才会进入相应场景
        var self = this
        var incidentClick = function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if (self.selectsolution(x, y, self.top, self.bottom) ||
                self.selectsolution(x, y, self.errorTop, self.errorBottom) ||
                self.selectsolution(x, y, self.errorTop1, self.errorBottom1)) {
                var index = self.name.slice(8)
                var name = `poker${index}`
                var s = IncidentTransition.new(self.game, name)
                self.addElement(s)
                self.game.canvas.removeEventListener('click', incidentClick)
            }
        }
        this.game.canvas.addEventListener('click', incidentClick)
    }
    clickscene() {
        var self = this
        var index = self.name.slice(8)
        if (index == 4 || index == 9) {
            self.selectanswer2()
        } else {
            self.selectanswer()
        }
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}
