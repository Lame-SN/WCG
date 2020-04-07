const Block = (position) => {
    let block = imgFromPath('./img/block.png')
    let o = {
        image: block,
        x: position[0],
        y: position[1],
        life: position[2],
        alive: true,
    }
    block.onload = () => {
        o.w = block.width
        o.h = block.height
    }
    o.hit = () => {
        o.life -= 1
        if (o.life < 1) {
            o.alive = false
        }
    }

    return o
}