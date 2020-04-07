class sceneStart extends Scene {
    constructor(game) {
        super(game)
        game.registerActions('k', function() {
            // 跳转游戏主场景
            let scene = sceneMain.new(game)
            game.changeScene(scene)
        })
    }
    draw() {
        this.game.context.fillText('按 K 开始游戏', 200, 150)
    }
}