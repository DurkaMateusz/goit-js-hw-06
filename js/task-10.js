const BASE_WIDTH_PX = 30;
const BASE_HEIGHT_PX = BASE_WIDTH_PX;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector('div#boxes');
const input = document.querySelector('div#controls > input');
function createBoxes(amount) {
  for (let i=0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.width = `${BASE_WIDTH_PX + 10 *i}px`;
    element.style.height = `${BASE_HEIGHT_PX + 10 *i}px`;
    element.style.backgroundColor = getRandomHexColor();
    container.insertAdjacentElement('beforeend', element);
  }
};
function destroyBoxes() {
  container.innerHTML = '';
};
function handleCreateClick() {
  const boxes = input.value;
  createBoxes(boxes);
};
function handleDestroyClick() {
  destroyBoxes(boxes);
};
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
createButton.addEventListener("click", handleCreateClick);
destroyButton.addEventListener("click", handleDestroyClick);