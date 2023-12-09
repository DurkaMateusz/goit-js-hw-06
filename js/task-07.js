const fontSizeControl = document.getElementById("font-size-control");
const textSize = document.getElementById("text");
fontSizeControl.addEventListener("input", () => {
            textSize.style.fontSize = `${fontSizeControl.value}px`;
});