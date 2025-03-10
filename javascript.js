//containers
let container = document.querySelector("#container");
let rowContainer = document.querySelector('#rowContainer');
let resetButton = document.querySelector('#resetButton');

//intro
const div = document.createElement("div");
div.setAttribute('class', 'helloWorld');
div.textContent = 'Hello World...';

container.appendChild(div);

const intro = document.createElement("div");
intro.setAttribute('class', 'intro');
intro.textContent = 'Drag your mouse around to draw. Click to erase.';

container.appendChild(intro);

//Grid
for (let i = 0; i < 16 * 16; i++) {
    let grid = document.createElement("div");
    grid.classList.add("gridBoxes");

    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "black"; 
    });

    grid.addEventListener('click', () => {
        grid.style.backgroundColor = "white";
    })
    
    rowContainer.appendChild(grid);
    rowContainer.style.display = "grid";
    rowContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    rowContainer.style.gridTemplateRows = "repeat(16, 1fr)";   
};

// Reset Button
const button = document.createElement('div');
button.setAttribute('class', 'button');
button.textContent = 'reset button';


resetButton.appendChild(button);

