const container = document.querySelector(".div-container")

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
    squares.style.background = "red" })
})
