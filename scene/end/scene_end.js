class sceneEnd extends Scene {
    constructor(game) {
        super(game)
        game.registerActions('r', function() {
            // 跳转游戏开始场景
            let scene = sceneStart.new(game)
            game.changeScene(scene)
        })
    }

    draw() {
        this.game.context.fillText(`Game over`, 200, 150)
        this.game.context.fillText(`点击 R 继续`, 200, 200)
    }
}