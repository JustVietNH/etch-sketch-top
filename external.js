
const container = document.querySelector(".sketchWindow")

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

createGrid(16);






