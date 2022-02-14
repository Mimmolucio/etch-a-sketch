drawBoard = document.querySelector('.drawBoard')

function drawGrid() {
    for (i = 0; i < 256; i++) {
        div = document.createElement('div')
        div.setAttribute("class", "drawDiv")
        div.style.width = "24px"
        div.innerHTML = "&nbsp"
        drawBoard.appendChild(div)
    }
}

drawGrid()