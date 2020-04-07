const loadLevel = (n) => {
    let array = []
    n -= 1
    for (let i of levels[n]) {
        array.push(Block(i))
    }
    return array
}

const enableDebugMode = (enable) => {
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
    // fps
    window.fps = 60
    e('#input-fps').addEventListener('input', function(event) {
        window.fps = event.target.value
    })
}

let blocks = []

const __main = () => {
    Game.instance(function(game) {
        let scene = sceneStart.new(game)
        game.runWithScene(scene)
    })

    enableDebugMode(true)
}

__main()