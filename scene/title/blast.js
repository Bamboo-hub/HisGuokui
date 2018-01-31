// 一个小火花粒子
class Blast extends GuaImage {
    constructor(game) {
        // 两种不同的粒子
        var n = randomBetween(1, 10)
        if (n > 8) {
            var name = 'blast1'
        } else {
            var name = 'blast2'
        }
        super(game, name)
        this.setup()
        this.setReduceAlpha()
    }
    setup() {
        this.alpha = 1
        this.reduceAlpha = false
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    setReduceAlpha() {
        // 两秒后使单个粒子透明度降低
        var self = this
        setTimeout(function(){
            self.reduceAlpha = true
        }, 1500/1)
    }
    setDelete() {
        // 删除粒子
        var self = this
            var elements = self.game.scene.elements[1].particles
            for (var i = 0; i < elements.length; i++) {
            var e = elements[i]
            if (self === e) {
                elements.splice(i, 1)
            }
        }
    }
    draw() {
        var context = this.game.context
        context.save()

        context.globalAlpha = this.alpha
        context.drawImage(this.texture, this.x, this.y)

        context.restore()
    }
    update() {
        // log(this.alpha)
        if (this.reduceAlpha) {
            this.alpha -= 0.1
            if (this.alpha <= 0.02) {
                this.setDelete()
            }
        }
        this.x += this.vx
        this.y += this.vy
        var factor = 0.01
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}

// 组合小火花
class BlastSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.x = 150
        this.y = 150
        // 小火花粒子具体的数量
        this.numberOfParticles = 40
        this.particles = []
    }
    update() {
        var self = this
        var w = self.game.canvas.width
        var h = self.game.canvas.height
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = Blast.new(this.game)
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            // 每个粒子的坐标随机
            var x = w / 100 * randomBetween(0, 100)
            var y = h / 100 * randomBetween(0, 65)
            p.init(x, y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for (var p of this.particles) {
            p.update()
        }
    }
    draw() {
        for (var p of this.particles) {
            p.draw()
        }
    }
}
