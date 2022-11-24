const defaultSize = 16;
let currentSize = defaultSize;
const board = document.querySelector('.board');
const modifyGridButton = document.querySelector('.modify-grid');
const resetButton = document.querySelector('.reset-grid');

let pixels = [];
pixels.forEach(pixel => {pixel.addEventListener('mouseover', changeColor)});

createBoard(defaultSize);

modifyGridButton.addEventListener('click', () => createBoard(readGridSize()));
resetButton.addEventListener('click', () => createBoard(currentSize));

function createBoard(gridSize) {
        pixels = [];
        let boardDim = parseInt(getComputedStyle(board).width);
        
        for (let i = 0; i < gridSize**2; i++) {
                const pixel = document.createElement('div');
                pixel.style.boxSizing = 'border-box'; //make widht and height with border
                pixel.style.width = pixel.style.height = `${boardDim / gridSize}px`;
                pixel.style.border = 'solid #F0C9C2 1px';
                pixel.style.borderRadius = '10px';
                pixels.push(pixel);
        }
        board.replaceChildren(...pixels);
        
        pixels.forEach(pixel => {pixel.addEventListener('mouseover', changeColor)});
}

function readGridSize() {
        let gridSize = 0;
        
        do {
                gridSize = parseInt(prompt('Chose a grid size between 2 and 100'));
        } while(!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 2);
        
        currentSize = gridSize ;

        return gridSize;
}

function changeColor() {
        let color = this.style.backgroundColor;
        this.style.backgroundColor = '#FAD8D1';
}