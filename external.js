
const container = document.querySelector(".sketchWindow")
const checkRain = document.getElementById('switchRain');
const checkGrad = document.getElementById('switchGrad');

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
function checkBox() {
  const allSwitch = document.getElementsByClassName("switch");
  for (let box = 0; box < allSwitch.length; box++) {
    let singleSwitch = allSwitch[box];
    singleSwitch.addEventListener('click', function(e){
      console.log(e)
      
    })
  }
}
function checkColor(cell){
  console.log("CHANGE")
  
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

createGrid(16);
checkBox();
makeHover();





