const Ball = () => {
    let ball = imgFromPath('./img/ball.png')
    let o = {
        image: ball,
        x: 200,
        y: 100,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    ball.onload = function() {
        o.w = ball.width
        o.h = ball.height
    }
    o.fire = () => {
        o.fired = true
    }

    return o
}