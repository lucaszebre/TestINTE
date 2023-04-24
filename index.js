// Get the pop-up
var popup = document.getElementById("popup");

// Get the close button


// Function to open the pop-up
function openPopup() {
    popup.classList.add("visible");
}

// Function to close the pop-up
function closePopup() {
    popup.classList.remove("visible");
}



// When the user clicks anywhere outside of the pop-up content, close it
window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}