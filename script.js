const container = document.getElementById("container");
const TOTAL_SQUARES = 800;

const colors = [
  "rgb(231, 76, 60)",
  "rgb(142, 68, 173)",
  "rgb(52, 152, 219)",
  "rgb(230, 126, 34)",
  "rgb(46, 204, 113)",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < TOTAL_SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "rgb(29, 29, 29)";
  });

  container.appendChild(square);
}
