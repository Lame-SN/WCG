class Game {
    constructor(callback) {
        this.canvas = e('#canvas')
        this.context = this.canvas.getContext("2d")
        this.callback = callback
        this.actions = {}
        this.keydowns = {}
        this.scene = null

        let self = this
        // events
        window.addEventListener('keydown', function(event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
        })

        this.callback(this)
    }
    static instance(callback) {
        this.i = this.i || new this(callback)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }
    registerActions(key, callback) {
        this.actions[key] = callback
    }
    // update
    update() {
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    // timer
    runloop() {
        let self = this
        // update events
        let action = Object.keys(this.actions)
        for (let i of action) {
            if (this.keydowns[i]) {
                this.actions[i]()
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        // next run loop
        setTimeout(function(){
            self.runloop()
        }, 1000 / window.fps)
    }
    runWithScene(scene) {
        let self = this
        this.scene = scene
        // 开始运行程序
        setTimeout(function(){
            self.runloop()
        }, 1000 / window.fps)
    }
    changeScene(scene) {
        this.scene = scene
    }

}