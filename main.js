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
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        one: 'img/one.jpg',
        two: 'img/two.jpg',
        blast1: 'img/blast1.png',
        blast2: 'img/blast2.png',
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
        incident14: 'img/incident14.jpg',
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
        poker15: 'img/poker15.jpg',
        white: 'img/white.jpg',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    /*
    1.起始页面底部文字渐入渐出效果 √
    2.如何监测游戏载入进度，在载入完成后改变文字/使用进度条动画，两者选其一，并启用 click 事件
    3.答题错误，需要进入另一场景 √
    4.答题正确，进入卡牌场景的效果尽量优化，需要找一些参考
    5.卡牌场景，需要增加返回起始场景的按钮，需要修改外观
    6.起始场景，渐入渐出的随机粒子效果 √

    7.背景音乐标签
    8.抽卡点击音效
    9.优化抽卡-答题的渐入渐出效果代码
    10.优化 click 事件有效范围代码，应该用单独的类或辅助函数，可参考矩形相交函数，稍微有点没思路
    11.能否让鼠标移到范围内时改变鼠标光标
    */
    enableDebugMode(game, true)
}

__main()
