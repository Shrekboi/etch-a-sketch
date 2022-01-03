const container = document.querySelector(".div-container")

function createDiv() {


    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div")
        div.style.width = 568 / 16 + "px"
        div.style.height = 568 / 16 + "px"
        div.style.border = "black 1px solid"

        container.appendChild(div);

    }


}


for (let i = 0; i < 16; i++) {
    createDiv()

}






// // const container = document.querySelector('.div-container');

// // const content = document.createElement('div');
// // content.classList.add('content');
// // content.textContent = 'This is the glorious text-content!';

// // container.appendChild(content);

