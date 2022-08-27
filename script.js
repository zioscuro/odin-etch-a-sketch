// Main grid container DOM element    
const container = document.querySelector('#container');
// Grid controls DOM elements
const gridSizeInput = document.querySelector('#gridSize-input');
const gridSizeBtn = document.querySelector('#btn-gridSize');
// Color controls DOM elements
const selectColorInput = document.querySelector('#selectColor');
const selectColorBtn = document.querySelector('#btn-selectColor');

// Initial grid setup
let gridSize = 16;
createGrid(gridSize);

//  Initial cell setup
let cellColor = '#000000';

// CONTROLS EVENT LISTENERS
// grid size change button 
gridSizeBtn.addEventListener('click', ()=>{
    // first remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // get new grid size from input and create new grid
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
});
// change color button
selectColorBtn.addEventListener('click', ()=>{
    // get new color from input and update cellColor variable
    cellColor = selectColorInput.value;
    console.log(cellColor);
});

// FUNCTIONS
// create grid in the container based on a grid size parameter
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', ()=>{
                cell.style.backgroundColor = cellColor;
            })
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}