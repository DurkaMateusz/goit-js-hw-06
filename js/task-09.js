function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorOfBtn = document.querySelector(".change-color");
const colorOfSpan = document.querySelector(".color");

      colorOfBtn.addEventListener("click", () => {
        const randomColor = getRandomHexColor();

        document.body.style.backgroundColor = randomColor;
        colorOfSpan.textContent = randomColor;
      });