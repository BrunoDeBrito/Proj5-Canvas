let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screens = document.querySelector('#tela');
let ctx = screens.getContext('2d');

/**
 * Selecionar a cor do canvas
 */
document.querySelectorAll('.colorArea .color').forEach(item => {

    item.addEventListener('click', colorClickEvent);
});

screens.addEventListener('mousedown', mouseDownEvent);
screens.addEventListener('mousemove', mouseMoveEvent);
screens.addEventListener('mouseup',   mouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);

/**
 * Verifica qual cor eu cliquei
 */
function colorClickEvent(e) {

    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');

}

/**
 * Esculta o Click do mouse
 * 
 * @param {*} e 
 */
function mouseDownEvent(e) {

    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;

}

/**
 * Esculta o Movimento do mouse
 * 
 * @param {*} e 
 */
function mouseMoveEvent(e) {

    if (canDraw) {

        draw(e.pageX, e.pageY);

    }
}

/**
 * Esculta o soltar do click do mouse
 */
function mouseUpEvent() {

    canDraw = false;

}

/**
 * Função para desenhar
 * 
 * @param {*} x 
 * @param {*} y 
 */
function draw(x, y) {

    let pointX = x - screens.offsetLeft;    
    let pointY = y - screens.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;

}

/**
 * Limpa o Quadro
 */
function clearScreen() {

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
