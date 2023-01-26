const inputRef = document.querySelector('#validation-input');
const correctValueOfNumbers = +inputRef.dataset.length;

inputRef.addEventListener('blur', validation)

function validation() {
     inputRef.classList.remove('valid', 'invalid')
    if (inputRef.value.length === correctValueOfNumbers) {
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.add('invalid')
    }
}