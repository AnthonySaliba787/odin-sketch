const container = document.createElement("div");
container.setAttribute("id", "grid-container");
document.body.appendChild(container);

container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";

for (i = 0; i < 256; i++) {
  let tempdiv = document.createElement("div");
  tempdiv.classList.toggle("grid-item");
  container.appendChild(tempdiv);
}

const button = document.querySelector(".add-squares");
let squares = 0;

button.addEventListener("click", () => {
  // We take input and limit it to 100 squares at most
  squares = parseInt(prompt("Please enter the number of squares:"));
  while (squares > 100) {
    squares = parseInt(
      prompt("Please enter a number smaller or equal to 100:")
    );
  }

  // We clear the grid
  let divSquares = document.getElementsByClassName("grid-item");
  while (divSquares.length > 0) {
    container.removeChild(divSquares[0]);
  }

  container.style.gridTemplateColumns = "repeat(" + squares + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + squares + ", 1fr)";
  let calculated_squares = squares * squares;
  // We populate the new grid with the specified number
  for (i = 0; i < calculated_squares; i++) {
    let tempdiv = document.createElement("div");
    tempdiv.classList.toggle("grid-item");
    container.appendChild(tempdiv);
  }
});
