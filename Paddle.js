const Paddle = () => {
    let paddle = imgFromPath('./img/paddle.png')
    let o = {
        image: paddle,
        x: 100,
        y: 200,
        speed: 10,
    }
    paddle.onload = function() {
        o.w = paddle.width
        o.h = paddle.height
    }
    return o
}