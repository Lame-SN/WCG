const Block = (position) => {
    let block = new Image()
    block.src = 'img/block.png'
    let blockObject = {
        img: block,
        x: position[0],
        y: position[1],
        life: position[2],
        live: true,
    }
    block.onload = function() {
        blockObject.w = block.width
        blockObject.h = block.height
    }
    blockObject.hit = function() {
        blockObject.life--
        if (blockObject.life < 1) {
            blockObject.live = false
        }
    }

    return blockObject
}