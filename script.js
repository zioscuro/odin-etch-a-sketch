const container = document.querySelector('#container')

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e)=>{
            e.target.classList.add('cellActive');
        })
        row.appendChild(cell);
    }
    container.appendChild(row);
}