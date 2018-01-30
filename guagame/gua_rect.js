class GuaRect {
    constructor(game, left, right, top, bottom) {
        this.game = game
        this.left = left
        this.top = top
        this.w = right - left
        this.h = bottom - top
        /*
        实际上这个问题是因为网页同时在运行两套像素标准
        第一套
        canvas 本身的像素 此处固定宽高为 734 和 1334
        第二套
        css 将视图调整为 100% 后的宽高，随用户界面而变

        点击事件遵循的是第二套标准，因此如果想要各个不同的终端都有准确的点击范围
        需要在程序中取得终端的尺寸标准，再进行有效范围计算

        但 canvas 自带的 rect 方法执行的是第一套标准，因此将第二套标准适用的尺寸
        拿来做 rect 的参数时，和第一套的效果却不一样

        18/01/23 18: 33
        放弃了第二种，在 game 类里设置 canvas 宽高等于终端窗口宽度，让点击范围与 rect 范围一致
        但无法处理终端窗口不是手机竖屏、比例不正确的情况，会导致画布拉伸
        之后可增加一个横屏时跳出提示的功能，强制竖屏
        */
    }
    static new(...args) {
        var i = new this(...args)
        return i
    }
    draw() {
        this.game.context.beginPath()
        this.game.context.lineWidth="1"
        this.game.context.strokeStyle="red"
        this.game.context.rect(this.left, this.top, this.w, this.h)
        this.game.context.stroke()
    }
    update() {

    }
}
