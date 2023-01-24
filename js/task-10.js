function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const amountOfBoxes = inputRef.value;
  let boxSize = 30;
  const boxArray = [];
  for (let i = 0; i < amountOfBoxes; i += 1){
    const newBox = document.createElement('div');
    boxSize += 10;
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxArray.push(newBox);
  }
  divBoxesRef.append(...boxArray);
}
btnDestroyRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}