function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', () =>{
let randomColor = getRandomHexColor();
 document.body.style.backgroundColor = randomColor;
 spanRef.textContent = randomColor;
})