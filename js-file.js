const board = document.querySelector('div.board');

for (let i = 0; i < 16**2; i++) {
        const pixel = document.createElement('div');
        pixel.style.boxSizing = 'border-box'; //make widht and height with border
        pixel.style.width = '60px';
        pixel.style.height = '60px';
        pixel.style.border = 'solid red 1px';
        board.appendChild(pixel);
}
