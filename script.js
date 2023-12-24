const grid = document.querySelector(".grid");

// first we get the size of the grid only producing grids with
// the same count of rows and collums, i.e. 2x2, 47x47, 88x88

function getGridSize(){
    let gridSize = prompt("Enter the number of collums/rows:");
    generateGrid(gridSize);
}


// then we generate the grid rows and its respective children

function newRow(nodeCount){
    let newRow = document.createElement("div");
    newRow.classList.add("grid-row");   
    while(nodeCount--){
        let newNode = document.createElement("div");
        newNode.style.border = "2px solid red";
        newNode.style.flex = "1 1 auto";
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

//getGridSize();

// Now add event handlers to trigger css states

function addPaintEffect(node){
    node.addEventListener("mouseover",()=>{
        node.style.backgroundColor = "black";
    })
}

let gridSize = 4;
generateGrid(gridSize);

// Making the buttons change grid size

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

plus.addEventListener("click", ()=>{
    gridSize++;
    grid.querySelectorAll(".grid-row").forEach(row => {
        grid.removeChild(row);
    });
    generateGrid(gridSize);
})


minus.addEventListener("click", ()=>{
    gridSize--;
    grid.querySelectorAll(".grid-row").forEach(row => {
        grid.removeChild(row);
    });
    generateGrid(gridSize);
})