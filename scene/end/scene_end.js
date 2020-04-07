const SceneEnd = (game) => {
    let o = {}

    let play = false
    game.registerActions('j', function() {
        log('j')
        play = true
    })

    o.update = () => {
        if (play === true) {
            let scene = Scene(game)
            game.changeScene(scene)
            play = false
        }
    }

    o.draw = () => {
        game.context.fillText(`Game over`, 200, 150)
        game.context.fillText(`点击屏幕继续`, 200, 200)
    }
    return o
}