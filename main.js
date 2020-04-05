const __main = () => {
    let canvas = e('#canvas')
    let context = canvas.getContext("2d")

    let paddle = Paddle()
    let ball = Ball()

    let leftdown = false
    let rightdown = false
    window.addEventListener('keydown', function(event) {
        let key = event.key
        if (key === 'a') {
            log('a')
            leftdown = true
        } else if (key === 'd') {
            rightdown = true
        } else if (key === 'f') {
            ball.fire()
        }
    })
    window.addEventListener('keyup', function(event) {
        let key = event.key
        if (key === 'a') {
            leftdown = false
        } else if (key === 'd') {
            rightdown = false
        }
    })
    setInterval(function() {
        // updata
        if (leftdown) {
            paddle.x -= paddle.speed
        } else if (rightdown) {
            paddle.x += paddle.speed
        }

        if (ball.fired) {
            if (ball.x < 0 || ball.x > 400) {
                ball.speedX *= -1
            }
            if (ball.y < 0 || ball.y > 300) {
                ball.speedY *= -1
            }
            ball.x += ball.speedX
            ball.y += ball.speedY
        }

        // 板 球 相撞
        if (collide(ball, paddle)) {
            log('hit')
            ball.speedY *= -1
        }
        // drow
        context.clearRect(0,0,canvas.width,canvas.height)
        context.drawImage(paddle.image, paddle.x, paddle.y)
        context.drawImage(ball.image, ball.x, ball.y)

    }, 1000 / 60)
}

__main()