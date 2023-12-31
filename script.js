const grid = document.querySelector(".grid");

let curMode = "color"
let activeBtn = null
let curColor = "black"

// the grid only produces grids with
// the same count of rows and collums, i.e. 2x2, 47x47, 88x88

// Random rgb value generator for rainbow mode implementation

function getRndColor() {
    let green = Math.floor((Math.random()*255));
    let red = Math.floor((Math.random()*255));
    let blue = Math.floor((Math.random()*255));
    let rgb = `rgb(${green}, ${red}, ${blue})`
    console.log(rgb)
    return rgb
}

// then we generate the grid rows and its respective children

function newRow(nodeCount){ let newRow = document.createElement("div");
    newRow.classList.add("grid-row");   
    while(nodeCount--){
        let newNode = document.createElement("div");
        newNode.style.flex = "1 1 auto";
        newNode.style.backgroundColor = "darkgrey";
        newNode.classList.add("hover-effect");
        newRow.appendChild(newNode);
        grid.appendChild(newRow);   
        addPaintEffect(newNode); 
    }
}

function generateGrid(gridSize){
    const nodeCount = gridSize;
    while (gridSize--){
        newRow(nodeCount);
    };
}

// Now add event handlers to trigger css states

function addPaintEffect(node){
    node.addEventListener("mouseover",()=>{
        switch (curMode) {
            case "rainbow":
                node.style.backgroundColor = getRndColor(); 
                break;
            case "eraser":
                node.style.backgroundColor = "darkgrey";
                break;
            case "color":
                node.style.backgroundColor = curColor;
        }
    })
}

let gridSize = 16;
generateGrid(gridSize);

// Function to clear grid

function clearGrid() {
    grid.querySelectorAll(".grid-row").forEach(row => {
        grid.removeChild(row);
    });
}

// Getting grid size from the range selector

const rangeSelector = document.querySelector("#size-slider");

rangeSelector.addEventListener("input", (event) => {
    gridSize = event.target.value;
    clearGrid();
    generateGrid(gridSize);
    updtSizeDisplay(gridSize);
});

// Depracated since now using slider to get selected
// grid size from user.
// Making the buttons change grid size

// const plus = document.querySelector("#plus");
// const minus = document.querySelector("#minus");
// 
// plus.addEventListener("click", ()=>{
//     gridSize++;
//     clearGrid();
//     generateGrid(gridSize);
//     updtSizeDisplay(gridSize);
// })
// 
// 
// minus.addEventListener("click", ()=>{
//     gridSize--;
//     clearGrid();
//     generateGrid(gridSize);
//     updtSizeDisplay(gridSize);
// })

// For the reset button

const rstBtn = document.querySelector("#reset")

rstBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid(gridSize);
});

// Implementing rainbow mode

const rnbBtn = document.querySelector("#rainbow")

rnbBtn.addEventListener("click", () => {
    curMode = "rainbow";
    activateBtn(rnbBtn)
})

// Eraser option, resets the bg color to darkgrey

const eraserBtn = document.querySelector("#eraser")

eraserBtn.addEventListener("click", () => {
    curMode = "eraser";
    activateBtn(eraserBtn)
})

// Color picker for color mode

const colorPicker = document.querySelector("#colorPicker")

colorPicker.addEventListener("input", (e) => {
    curColor = e.target.value;
})

// Color Mode button

const colorBtn = document.querySelector("#color")

colorBtn.onclick = () => {
    activateBtn(colorBtn);
    curMode = "color";
}

// Activating button color change

function activateBtn(newMode) {
    try {
        activeBtn.classList.remove("active");
        activeBtn = newMode;
        activeBtn.classList.add("active");
    }     
    catch{
        activeBtn = newMode;
        activeBtn.classList.add("active");
    }
}

// Update grid size count

const sizeDisplay = document.querySelector("span");

function updtSizeDisplay(newSize) {
   sizeDisplay.textContent = `${newSize} X ${newSize}` 
}
