const loadLevel = (n) => {
    let array = []
    n -= 1
    for (let i of levels[n]) {
        array.push(Block(i))
    }
    return array
}

const enableDebugMode = (game, enable) => {
    if (!enable) {
        return
    }
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
    let ball = Ball()
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
    // fps
    window.fps = 60
    e('#input-fps').addEventListener('input', function(event) {
        window.fps = event.target.value
    })
}

let blocks = []

const __main = () => {
    let game = Game(function(game) {
        let scene = SceneStart(game)
        game.runWithScene(scene)
    })

    enableDebugMode(game, true)
}

__main()