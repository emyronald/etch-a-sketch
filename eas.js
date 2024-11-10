const grid = document.querySelector(".grid");
const setGrid = document.querySelector(".set-grid");
const reset = document.querySelector(".reset");
const erase = document.querySelector(".erase");
const gridL = 700;
function defaultGrid() {
  grid.replaceChildren();
  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);
    newDiv.style = `height:${gridL / 16}px; width: ${gridL / 16}px`;

    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "black";
    });
    erase.addEventListener("click", defaultGrid);
  }
}
function eraseGrid() {}
document.addEventListener("DOMContentLoaded", defaultGrid);
function createDivs() {
  let gridSize = Number(
    prompt(
      "Enter number of squares per side. Number should be between 1 and 100"
    )
  );
  if (gridSize <= 100 && gridSize > 0) {
    grid.replaceChildren();
    for (let i = 0; i < gridSize ** 2; i++) {
      const newDiv = document.createElement("div");
      grid.appendChild(newDiv);
      newDiv.style = `height:${gridL / gridSize}px; width: ${
        gridL / gridSize
      }px`;

      newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
      });
    }
    function eraseGrid() {
      grid.replaceChildren();
      for (let i = 0; i < gridSize ** 2; i++) {
        const newDiv = document.createElement("div");
        grid.appendChild(newDiv);
        newDiv.style = `height:${gridL / gridSize}px; width: ${
          gridL / gridSize
        }px`;
      }
      erase.removeEventListener("click", eraseGrid);
    }
    erase.addEventListener("click", eraseGrid);
  } else {
    alert("invalid input");
  }
}
setGrid.addEventListener("click", createDivs);
reset.addEventListener("click", defaultGrid);
