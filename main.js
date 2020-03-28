
const __main = () => {
    let canvas = e('#canvas')
    var context = canvas.getContext("2d");
    let img = new Image()
    img.src = 'img/paddle.png'
    img.onload = function() {
        context.drawImage(img, 50, 200)
    }
}
__main()