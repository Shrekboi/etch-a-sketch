const container = document.querySelector(".div-container")
const clearButton = document.querySelector(".actualButton")

function createDiv() {

    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div")
        div.style.width = 568 / 16 + "px"
        div.style.height = 568 / 16 + "px"
        div.style.border = "black 1px solid"
        div.classList.add("square")

        container.appendChild(div);
    }
}

for (let i = 0; i < 16; i++) {
    createDiv()
}




const squares = document.querySelectorAll(".square")

squares.forEach(squares => {
    squares.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        squares.style.background = "#" + randomColor
    })
})

function resetSquares() {
    squares.forEach(squares => {
        squares.style.background = "white"
    }
    )
}

clearButton.addEventListener("click", () => {
    resetSquares();
})
