const container = document.createElement("div");
container.setAttribute("id", "grid-container");
document.body.appendChild(container);

let squares = 0;

for (i = 0; i < 256; i++) {
  let tempdiv = document.createElement("div");
  tempdiv.classList.toggle("grid-item");
  container.appendChild(tempdiv);
}

const divs = document.querySelectorAll("div");
divs.forEach((div) => {});
