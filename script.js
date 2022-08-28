// Main grid container DOM element    
const container = document.querySelector('#container');

// Controls DOM elements
const gridSizeInput = document.querySelector('#gridSize-input');
const selectColorInput = document.querySelector('#selectColor');
const btnReset = document.querySelector('#btn-reset');

// Initial grid setup
let gridSize = 16;
createGrid(gridSize);

//  Initial cell setup
let cellColor = '#000000';

// CONTROLS EVENT LISTENERS
// grid size change
gridSizeInput.addEventListener('change', ()=>{
    // first remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // get new grid size from input and create new grid
    gridSize = gridSizeInput.value;
    updateGrid(gridSize);
});

// change pointer color 
selectColorInput.addEventListener('change', ()=>{
    // get new color from input and update cellColor variable
    cellColor = selectColorInput.value;
});

// reset grid button
btnReset.addEventListener('click', ()=>{
    //reset color
    selectColorInput.value = '#000000';
    cellColor = selectColorInput.value;
    //reset grid
    gridSize = 16;
    updateGrid(gridSize);
})

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

// update grid based on a grid size parameter
function updateGrid(size) {
    // first remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // create new grid    
    createGrid(size);
}   