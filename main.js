const loadLevel = (n) => {
    let array = []
    n -= 1
    for (let i of levels[n]) {
        array.push(Block(i))
    }
    return array
}

const test = (game, ball) => {
    window.addEventListener('keydown', function(event) {
        let key = event.key
        if (key === 'p') {
            window.pause = !window.pause
        } else if ('123456789'.includes(key)) {
            blocks = loadLevel(key)
        }
    })
    // 拖动小球
    let drag = false
    game.canvas.addEventListener('mousedown', function(event) {
        if (ball.hasPoint(event.offsetX, event.offsetY)) {
            drag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        if (drag === true) {
            ball.x = event.offsetX
            ball.y = event.offsetY
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        drag = false
    })
}

let blocks = []

const __main = () => {
    let game = Game()
    let score = 0
    let paddle = Paddle()
    let ball = Ball()
    blocks = loadLevel(1)

    // test
    test(game, ball)

    game.registerActions('a', function() {
        paddle.moveLeft()
    })
    game.registerActions('d', function() {
        paddle.moveRight()
    })
    game.registerActions('f', function() {
        ball.fire()
    })

    window.pause = false

    game.update = () => {
        if (window.pause === true) {
            return
        }
        ball.move()
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
    game.draw = () => {
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

}

__main()