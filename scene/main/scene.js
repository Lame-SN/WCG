const Scene = (game) => {
    let o = {}

    let score = 0
    let paddle = Paddle()
    let ball = Ball()
    blocks = loadLevel(1)

    game.registerActions('a', function() {
        paddle.moveLeft()
    })
    game.registerActions('d', function() {
        paddle.moveRight()
    })
    game.registerActions('f', function() {
        ball.fire()
    })

    o.update = () => {
        if (window.pause === true) {
            return
        }
        ball.move()
        if (ball.y > paddle.y + paddle.h) {
            let end = SceneEnd(game)
            game.changeScene(end)
        }
        // 板 球 相撞
        if (collide(ball, paddle)) {
            ball.hit()
        }
        // 球 块 相撞
        for (let j = 0; j < blocks.length; j++) {
            let block = blocks[j]
            if (block.alive) {
                if (collide(ball, block)) {
                    ball.hit()
                    block.hit()
                    score += 100
                }
            }
        }
    }

    o.draw = () => {
        game.drawImage(paddle)
        game.drawImage(ball)
        for (let j = 0; j < blocks.length; j++) {
            let block = blocks[j]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        game.context.fillText(`分数：${score}`, 350, 20)
    }
    return o
}