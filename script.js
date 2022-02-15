drawBoard = document.querySelector('.drawBoard')


let row = 16
let totalPixels = row * row
let width = 384 / row
let squareDimension = width.toString() + "px"



function drawGrid() {
    for (i = 0; i < totalPixels; i++) {
        div = document.createElement('div')
        div.setAttribute("class", "drawDiv")
        div.style.width = squareDimension
        div.style.height = squareDimension
        div.innerHTML = "&nbsp"
        drawBoard.appendChild(div)

    }
}

function clearGrid() {
    while (drawBoard.firstChild) {
        drawBoard.removeChild(drawBoard.lastChild)
    }
}



function selectPixels() {
    pixels = document.querySelectorAll('.drawDiv')
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "cornflowerblue"
        })
    })
}

drawGrid()
selectPixels()

const sizes = document.querySelectorAll('.size')
sizes.forEach((siz) => {
    siz.addEventListener('click', () => {
        row = parseInt(siz.id)
        totalPixels = row * row
        width = 384 / row
        squareDimension = width.toString() + "px"
        clearGrid()
        drawGrid()
        selectPixels()
    })
})