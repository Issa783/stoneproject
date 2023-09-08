const section = document.getElementById("services-section");
const colors = ["url(","#e74c3c","#2ecc71","#f39c12"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    section.style.backgroundColor = colors[currentColorIndex];
}

// Call the function to start the color change
setInterval(changeBackgroundColor, 3000); // Change color every 3 secondss