const Paddle = () => {
    let paddle = imgFromPath('./img/paddle.png')
    let o = {
        image: paddle,
        x: 100,
        y: 250,
        speed: 10,
    }
    paddle.onload = () => {
        o.w = paddle.width
        o.h = paddle.height
    }

    o.move = () => {
        if (o.x < 0) {
            o.x = 0
        } else if (o.x + o.w > 400) {
            o.x = 400 - o.w
        }
    }
    o.moveLeft = () => {
        o.x -= o.speed
        o.move()
    }
    o.moveRight = () => {
        o.x += o.speed
        o.move()
    }
    return o
}