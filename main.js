var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能log
            log('k', k)
            blocks = loadLevel(game, Number(k))
            log('blocks', blocks)
        }
    })
}

// 音频缓存完成后进行播放
var music = function() {
    var body = e('body')
    body.addEventListener('click', function(event){
        var m = e('#id-audio-player')
        m.play()
        var div = '<div>开始播放了</div>'
        body.insertAdjacentHTML('beforeend', div)
        m.addEventListener('ended', function(event){
            m.currentTime = 0
            m.play()
        })
    })
}

var __main = function() {
    var images = {
        title: 'img/title.jpg',
        blast1: 'img/blast1.png',
        blast2: 'img/blast2.png',
        main: 'img/main.jpg',
        incident1: 'img/incident1.jpg',
        incident2: 'img/incident2.jpg',
        incident3: 'img/incident3.jpg',
        incident4: 'img/incident4.jpg',
        incident5: 'img/incident5.jpg',
        incident6: 'img/incident6.jpg',
        incident7: 'img/incident7.jpg',
        incident8: 'img/incident8.jpg',
        incident9: 'img/incident9.jpg',
        incident10: 'img/incident10.jpg',
        incident11: 'img/incident11.jpg',
        incident12: 'img/incident12.jpg',
        incident13: 'img/incident13.jpg',
        poker1: 'img/poker1.jpg',
        poker2: 'img/poker2.jpg',
        poker3: 'img/poker3.jpg',
        poker4: 'img/poker4.jpg',
        poker5: 'img/poker5.jpg',
        poker6: 'img/poker6.jpg',
        poker7: 'img/poker7.jpg',
        poker8: 'img/poker8.jpg',
        poker9: 'img/poker9.jpg',
        poker10: 'img/poker10.jpg',
        poker11: 'img/poker11.jpg',
        poker12: 'img/poker12.jpg',
        poker13: 'img/poker13.jpg',
        poker14: 'img/poker14.jpg',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}

music()
__main()
