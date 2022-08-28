// Main grid container DOM element    
const container = document.querySelector('#container');

// Controls DOM elements
const gridSizeInput = document.querySelector('#gridSize-input');
const selectColorInput = document.querySelector('#selectColor');
const btnReset = document.querySelector('#btn-reset');
const btnColorMode = document.querySelector('#btn-colorMode');
const btnColorOpacityMode = document.querySelector('#btn-colorOpacityMode');
const btnRandomMode = document.querySelector('#btn-randomMode');
const btnEraserMode = document.querySelector('#btn-eraserMode');

// Initial grid setup
let gridSize = 16;
createGrid(gridSize);

//  Initial cell setup
let cellColor = '#000000';
let colorMode = 'color';

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
    setColorMode('color');
    updateGrid(gridSize);
})

// pointer mode buttons
// color mode
btnColorMode.addEventListener('click', ()=>{
    setColorMode('color');
});
btnColorOpacityMode.addEventListener('click', ()=>{
    setColorMode('colorOpacity');
});
// random mode
btnRandomMode.addEventListener('click', ()=>{   
    setColorMode('random');
});
btnEraserMode.addEventListener('click', ()=>{
    setColorMode('eraser');
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
                updateColor(cell,colorMode);
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

// update an html cell color based on color mode
function updateColor(cell, mode) {
    switch (mode) {
        case 'color':
            cell.style.backgroundColor = cellColor;            
            break;
        case 'colorOpacity':
            cell.style.backgroundColor = cellColor;
            currentOpacity = parseFloat(cell.style.opacity);
            if (currentOpacity > 0  && currentOpacity < 1) {
                cell.style.opacity = '' + (currentOpacity + 0.1);                
            } else if (currentOpacity === 1) {
                break;
            } else {
                cell.style.opacity = '0.1';
            }
            break;
        case 'random':
            cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            break;
        case 'eraser':
            cell.style.backgroundColor = '#ffffff';
            break;
        default:
            console.error('Something Wrong in updateColor')
    }
}

// set color mode and update mode buttons class
function setColorMode(mode) {
    colorMode = mode;

    const modeButtons = [btnColorMode, btnColorOpacityMode, btnRandomMode, btnEraserMode];
    modeButtons.forEach((btn)=>{
        if (btn.value === colorMode) {
            btn.classList.add('mode-active');
        } else {
            btn.classList.remove('mode-active');
        }
    });
}