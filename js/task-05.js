const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener("input", () => {
    if(inputRef.value.trim() === ""){
        spanRef.textContent = "Anonymous";
    } else{
        spanRef.textContent = inputRef.value; 
    }
})
