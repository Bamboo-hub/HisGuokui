// 瓜
class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        // 按设备高度设置 canvas 具体大小，并保持同比
        this.canvasWidth = window.innerWidth
        this.canvasHeight = window.innerWidth / 0.562218890554723

        this.canvas.style.width = this.canvasWidth + "px"
        this.canvas.style.height = this.canvasHeight + "px"

        // 在内存中设置实际尺寸（缩放以考虑额外的像素密度）。
        var scale = window.devicePixelRatio // <---在视网膜屏幕上更改为1以查看模糊的画布。
        this.canvas.width = this.canvasWidth * scale
        this.canvas.height = this.canvasHeight * scale

        // 标准化坐标系以使用css像素。
        // this.context.scale(scale, scale)

        // events
        var self = this
        window.addEventListener('keydown', function(event){
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawBg(img) {
        // 根据 drawImage 改造的新函数
        this.context.drawImage(img.texture, img.x, img.y, this.canvas.width, this.canvas.height)
    }
    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        // events
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    imageByName(name) {
        var g = this
        log('image by name', g.images)
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    textureByName(name) {
        var g = this
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        return img
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }

    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}
