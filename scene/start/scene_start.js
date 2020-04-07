const SceneStart = (game) => {
    let o = {}

    let start = false
    game.registerActions('k', function() {
        log('开始游戏')
        start = true
    })

    o.update = () => {
        if (start === true) {
            let scene = Scene(game)
            game.changeScene(scene)
            start = false
        }
    }

    o.draw = () => {
        game.context.fillText('按K开始游戏', 200, 150)
    }
    return o
}