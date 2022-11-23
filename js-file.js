const board = document.querySelector('.board');
const modifyGridButton = document.querySelector('.modify-grid');

let pixels = [];

for (let i = 0; i < 16**2; i++) {
        const pixel = document.createElement('div');
        pixel.style.boxSizing = 'border-box'; //make widht and height with border
        pixel.style.width = '60px';
        pixel.style.height = '60px';
        pixel.style.border = 'solid #F0C9C2 1px';
        pixel.style.borderRadius = '10px';
        board.appendChild(pixel);
        pixels.push(pixel);
}

pixels.forEach(pixel => {pixel.addEventListener('mouseover', changeColor)});

modifyGridButton.addEventListener('click', createBoard);

function createBoard() {
        pixels = [];
        let gridSize = readGridSize();
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
        
        return gridSize;
}

function changeColor() {
        let color = this.style.backgroundColor;
        this.style.backgroundColor = '#FAD8D1';
}