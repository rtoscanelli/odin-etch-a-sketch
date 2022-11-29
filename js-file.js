const defaultSize = 9;
let currentSize = defaultSize;
const redTheme = {background: '#ff4b66', button: '#B32238', color: '#FAD8D1'};
const yellowTheme = {background: '#ffc564', button: '#FFCF78', color: '#FCF7C4'};
const greenTheme = {background: '#84df9b', button: '#7BD485', color: '#E6FFD4'};
const blueTheme = {background: '#58e9fe', button: '#4861E8', color: '#DAE8FA'};
let paintColor = redTheme['color'];

const body = document.querySelector('body');
const board = document.querySelector('.board');
const modifyGridButton = document.querySelector('.modify-grid');
const resetButton = document.querySelector('.reset-grid');
const themeButtons = document.querySelectorAll('.themes > button');


let pixels = [];
pixels.forEach(pixel => {pixel.addEventListener('mouseover', changeColor)});

createBoard(defaultSize);

modifyGridButton.addEventListener('click', () => createBoard(readGridSize()));
resetButton.addEventListener('click', () => createBoard(currentSize));
themeButtons.forEach(button => {
        button.addEventListener('click', changeTheme)        
});

function createBoard(gridSize) {
        pixels = [];
        let boardDim = parseInt(getComputedStyle(board).width);
        
        for (let i = 0; i < gridSize**2; i++) {
                const pixel = document.createElement('div');
                pixel.style.boxSizing = 'border-box'; //make widht and height with border
                pixel.style.width = pixel.style.height = `${boardDim / gridSize}px`;
                pixel.style.border = `solid #E8E8E8 1px`; //'solid #F0C9C2 1px';
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
        this.style.backgroundColor = paintColor;
}

function changeTheme() {
        console.log(getComputedStyle(this).backgroundColor)
        if(this.id == 'red') {
                body.style.backgroundColor = redTheme['background'];
                resetButton.style.backgroundColor = redTheme['button'];
                modifyGridButton.style.backgroundColor = redTheme['button'];
                paintColor = redTheme['color'];
        }
        else if(this.id == 'yellow') {
                body.style.backgroundColor = yellowTheme['background'];
                resetButton.style.backgroundColor = yellowTheme['button'];
                modifyGridButton.style.backgroundColor = yellowTheme['button'];
                paintColor = yellowTheme['color'];
        }
        else if(this.id == 'green') {
                body.style.backgroundColor = greenTheme['background'];
                resetButton.style.backgroundColor = greenTheme['button'];
                modifyGridButton.style.backgroundColor = greenTheme['button'];
                paintColor = greenTheme['color'];
        }
        else if(this.id == 'blue') {
                body.style.backgroundColor = blueTheme['background'];
                resetButton.style.backgroundColor = blueTheme['button'];
                modifyGridButton.style.backgroundColor = blueTheme['button'];
                paintColor = blueTheme['color'];
        }
}