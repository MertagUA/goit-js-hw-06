const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', () => {
    inputRef.classList.remove('valid', 'invalid')
    if (inputRef.value.length === 6) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid')
    }
})