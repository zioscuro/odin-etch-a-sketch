// Main grid container DOM element    
const container = document.querySelector('#container');
// Grid controls DOM elements
const gridSizeInput = document.querySelector('#grid-size-input');
const gridSizeBtn = document.querySelector('#btn-grid-size');

// Initial grid setup
let gridSize = 16;
createGrid(gridSize);

// Add event listener to magange a grid size change
gridSizeBtn.addEventListener('click', ()=>{
    // first remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // get new grid size from input and create grid
    gridSize = gridSizeInput.value;
    createGrid(gridSize);
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
            cell.addEventListener('mouseover', (e)=>{
                e.target.classList.add('cellActive');
            })
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}