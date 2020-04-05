const log = console.log.bind(console)

const e = (selector) => document.querySelector(selector)

const collide = (paddleObject, ballObject) => {
    let b1 = Math.abs((ballObject.x + ballObject.w/2) - (paddleObject.x + paddleObject.w/2)) < (ballObject.w + paddleObject.w)/2
    let b2 = Math.abs((ballObject.y + ballObject.h/2) - (paddleObject.y + paddleObject.h/2)) < (ballObject.h + paddleObject.h)/2
    return b1 && b2
}

const imgFromPath = (path) => {
    let ball = new Image()
    ball.src = path
    return ball
}
