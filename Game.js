const Game = () => {
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
    // fps
    window.fps = 60
    e('#input-fps').addEventListener('input', function(event) {
        window.fps = event.target.value
    })
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
    setTimeout(function(){
        runloop()
    }, 1000 / window.fps)
    return g
}