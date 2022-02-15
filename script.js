// Select Drawing Board
drawBoard = document.querySelector('.drawBoard')


// Variable Definitons
let row = 16
let totalPixels = row * row
let width = 384 / row
let squareDimension = width.toString() + "px"


// Draw the Grid
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

// Remove all the Childs of the DrawBoard - used to render a new Board
function clearGrid() {
    while (drawBoard.firstChild) {
        drawBoard.removeChild(drawBoard.lastChild)
    }
}


// Add an Eventlistener to all pixels in the Board
function selectPixels() {
    pixels = document.querySelectorAll('.drawDiv')
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "cornflowerblue"
        })
    })
}

// Initial Setup of the Board (Default to 16x16)
drawGrid()
selectPixels()

// Setup the buttons to change the pixel-density of the board
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

// function for the prompt
function getInput() {
    return parseInt(prompt("Please enter the desired pixels per row (1 - 64)"))

}

// Erase all Drawings and reset Board and ask user for size of board
const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    clearGrid()
    let userInput = getInput()
    while (userInput > 64 || userInput < 1 || isNaN(userInput)) {
        userInput = getInput()
    }
    row = userInput
    totalPixels = row * row
    width = 384 / row
    squareDimension = width.toString() + "px"

    drawGrid()
    selectPixels()
})

const erase = document.querySelector('.erase')
erase.addEventListener('click', () => {
    clearGrid()
    drawGrid()
    selectPixels()
})