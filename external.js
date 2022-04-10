
const container = document.querySelector(".sketchWindow")
const checkRain = document.getElementById('switchRain');
const checkGrad = document.getElementById('switchGrad'); //changing to radio button
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.textContent = slider.value; // Display the default slider value
let gridSize = 16;

refresh.onclick = () => reload();

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value;
  gridSize = this.value;
} 


function createGrid(gridSize){
  for (let rows = 0; rows < gridSize; rows++) {
    for (let cols = 0; cols < gridSize; cols++) {
      let p = document.createElement('div');
      p.classList.add('cell');
      container.append(p)
    }
  }
  const collection = document.getElementsByClassName("cell");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.height = (480/gridSize)+"px";
    collection[i].style.width = (480/gridSize)+"px";
  }
}

function checkColor(cell){
  if (checkRain.checked) {
    checkGrad.checked = false;
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).slice(1,7)
  } else if(checkGrad.checked) {
    checkRain.checked = false;
    console.log(cell.style.currentStyle)
    return "white"
  } else {
    return "black"
  }
}

function recolor(cell, color) {
  let backColor = color;
  cell.style.backgroundColor = backColor;
}

function makeHover() {
  const allCells = document.getElementsByClassName("cell");
  for (let cell = 0; cell < allCells.length; cell++) {
    let singleCell = allCells[cell];
    singleCell.addEventListener('mouseover', function(e) {
      let color = checkColor(cell);
      recolor(singleCell, color);
    });
  }
}

function clear() {
  container.innerHTML = "";
}
function reload() {
  clear();
  createGrid(gridSize);
  makeHover();
}


window.onload = () => {
  createGrid(gridSize);
  makeHover();
}






