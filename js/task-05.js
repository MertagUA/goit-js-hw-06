const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener("input", () => {
    console.log('ckickckc');
    if(inputRef.value === ""){
        spanRef.textContent = "Anonymous";
    } else{
        spanRef.textContent = inputRef.value; 
    }
})
