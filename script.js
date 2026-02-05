const container = document.getElementById("container");
const TOTAL_SQUARES = 800;

const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#f1c40f"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

for (let i = 0; i < TOTAL_SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#1d1d1d";
  });

  container.appendChild(square);
}
