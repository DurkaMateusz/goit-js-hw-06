const textInputed = document.querySelector("#name-input");
const textOutputed = document.querySelector("#name-output");

textInputed.addEventListener("input", (event) => {
    const inputedValue = event.currentTarget.value;
    if(inputedValue === ""){
    textOutputed.textContent = "Anonymous";
} else {
    textOutputed.textContent = inputedValue;
}
});