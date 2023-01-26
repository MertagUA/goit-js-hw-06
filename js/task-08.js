const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
    event.preventDefault();
    const userData = {
        email: event.currentTarget.elements.email.value.trim(),
        pass: event.currentTarget.elements.password.value,
    }
    if (userData.email === "" || userData.pass === "") {
        return alert("Всі поля повинні бути заповнені.")
    }
    console.log(userData);
    event.currentTarget.reset();
}
