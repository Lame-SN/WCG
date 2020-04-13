class sceneMain extends Scene {
    constructor(game) {
        super(game)
        this.score = 0
        this.paddle = Paddle()
        this.ball = Ball()
        blocks = loadLevel(1)

        game.registerActions('a', function() {
            self.paddle.moveLeft()
        })
        game.registerActions('d', function() {
            self.paddle.moveRight()
        })
        game.registerActions('f', function() {
            self.ball.fire()
        })

        // 拖动小球(debug)
        let drag = false
        let self = this
        game.canvas.addEventListener('mousedown', function(event) {
            if (self.ball.hasPoint(event.offsetX, event.offsetY)) {
                drag = true
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            if (drag === true) {
                self.ball.x = event.offsetX
                self.ball.y = event.offsetY
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            drag = false
        })
    }
    update() {
        if (window.pause === true) {
            return
        }
        this.ball.move()
        // 跳转结束场景
        if (this.ball.y > this.paddle.y + 10) {
            let end = sceneEnd.new(this.game)
            this.game.changeScene(end)
        }
        // 板 球 相撞
        if (collide(this.ball, this.paddle)) {
            this.ball.hit()
        }
        // 球 块 相撞
        for (let j = 0; j < blocks.length; j++) {
            let block = blocks[j]
            if (block.alive && collide(block, this.ball)) {
                this.ball.hit()
                block.hit()
                this.score += 100
            }
        }
    }
    draw() {
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)
        for (let j = 0; j < blocks.length; j++) {
            let block = blocks[j]
            if (block.alive) {
                this.game.drawImage(block)
            }
        }
        this.game.context.fillText(`分数：${this.score}`, 350, 20)
    }

}