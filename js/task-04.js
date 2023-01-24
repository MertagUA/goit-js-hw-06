let counterValue = 0;

const decrementBntRef = document.querySelector('[data-action="decrement"]');
const incrementBntRef = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

decrementBntRef.addEventListener('click', () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});
incrementBntRef.addEventListener('click', () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
})