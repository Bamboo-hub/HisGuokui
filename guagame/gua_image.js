class GuaImage {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
    }
    static new(...args) {
        var i = new this(...args)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}
