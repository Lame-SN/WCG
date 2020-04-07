const Ball = () => {
    let ball = imgFromPath('./img/ball.png')
    let o = {
        image: ball,
        x: 120,
        y: 150,
        speedX: 3,
        speedY: 3,
        fired: false,
    }
    ball.onload = () => {
        o.w = ball.width
        o.h = ball.height
    }
    o.move = () => {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.fire = () => {
        o.fired = true
    }
    o.hit = () => {
        o.speedY *= -1
    }
    o.hasPoint = function(x, y) {
        let xIn = x >= o.x && x <= o.x + o.w
        let yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    return o
}