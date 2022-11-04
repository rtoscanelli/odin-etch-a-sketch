const board = document.querySelector('div.board');

let pixels = [];

for (let i = 0; i < 16**2; i++) {
        const pixel = document.createElement('div');
        pixel.style.boxSizing = 'border-box'; //make widht and height with border
        pixel.style.width = '60px';
        pixel.style.height = '60px';
        pixel.style.border = 'solid red 1px';
        board.appendChild(pixel);
        pixels.push(pixel);
}

pixels.forEach(pixel => {
        
        pixel.addEventListener('mouseover', () => {
                let color = pixel.style.backgroundColor;
                if (color == 'blue') {
                        pixel.style.backgroundColor = 'white';
                }
                else {
                        pixel.style.backgroundColor = 'blue'
                }
        });
});