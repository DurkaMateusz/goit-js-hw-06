const formLogin = document.querySelector(".login-form");

const loginHandler = function (event)  {
    event.preventDefault();
    const emailText = this.elements.email;
    const passwordText = this.elements.password;
    if (emailText.value.trim() === "" || passwordText.value.trim() === "") {
        alert("Fill all fields!");
    } else {
        const formData = {
            email: emailText.value,
            password: passwordText.value,
        };
        console.log(formData);
        this.reset();
}
};

formLogin.addEventListener("submit", loginHandler);
