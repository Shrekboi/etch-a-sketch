const container = document.querySelector(".div-container")
const clearButton = document.querySelector(".actualButton")

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

createGrid(16)

function resetSquares() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
}

clearButton.addEventListener("click", () => {
    resetSquares();
    let newGridSize = prompt("New grid size. Less than 60.")
    if (newGridSize <= 60) {
        createGrid(newGridSize);
        updateTheSquares();
    }

})

function updateTheSquares() {

    const squares = document.querySelectorAll(".square")

    squares.forEach(squares => {
        squares.addEventListener("mouseover", () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            squares.style.background = "#" + randomColor
        })
    })


}

updateTheSquares();