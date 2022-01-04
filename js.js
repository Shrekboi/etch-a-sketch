const container = document.querySelector(".div-container")
const clearButton = document.querySelector(".actualButton")

let color = "green"; //default color


function createDivColumn(times) {

    for (let i = 0; i < times; i++) {
        let boxSize = 600 - (times * 2)
        const div = document.createElement("div")
        div.style.width = boxSize / times + "px"
        div.style.height = boxSize / times + "px"
        div.style.border = "black 1px solid"
        div.classList.add("square")

        container.appendChild(div);
    }
}

function createGrid(times) {

    for (let i = 0; i < times; i++) {
        createDivColumn(times)
    }
}

createGrid(16) //create intial grid

function resetSquares() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
}

let rainbowState = false

function setNewColor() {
    rainbowState = false
    color = document.querySelector(".colorInput").value
}

function updateTheSquares() {

    const squares = document.querySelectorAll(".square")

    squares.forEach(squares => {
        squares.addEventListener("mouseover", () => {
            if (rainbowState) {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                squares.style.background = "#" + randomColor
            }
            else {
                squares.style.background = color
            }
        })
    })
}

// buttons
const rainbowButton = document.querySelector(".rainbowButton")
rainbowButton.addEventListener("click", () => {
    rainbowState = true
})

clearButton.addEventListener("click", () => {
    resetSquares();
    let newGridSize = prompt("New grid size. Less than 60.")
    if (newGridSize <= 60 && newGridSize > 1) {
        createGrid(newGridSize);
        updateTheSquares();
    }
    else {
        createGrid(16);
        updateTheSquares();
    }
})

updateTheSquares(); //running the actual program