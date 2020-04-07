const Game = (callback) => {
    let canvas = e('#canvas')
    let context = canvas.getContext("2d")

    let g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
    }
    g.drawImage = (img) => {
        context.drawImage(img.image, img.x, img.y)
    }
    // events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })
    g.registerActions = (key, callback) => {
        g.actions[key] = callback
    }
    // update
    g.update = () => {
        g.scene.update()
    }
    // draw
    g.draw = () => {
        g.scene.draw()
    }

    // timer
    let runloop = () => {
        // update events
        let action = Object.keys(g.actions)
        for (let i of action) {
            if (g.keydowns[i]) {
                g.actions[i]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0,0, canvas.width, canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            runloop()
        }, 1000 / window.fps)
    }
    g.runWithScene = (scene) => {
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            runloop()
        }, 1000 / window.fps)
    }
    g.changeScene = (scene) => {
        g.scene = scene
    }
    callback(g)

    return g
}