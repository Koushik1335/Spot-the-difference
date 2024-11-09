let circlesFound = 0; // Counter for found circles
const totalCircles = 5; // Total number of circles to find

function changeOpacity(imageId) {
    var image = document.getElementById(imageId);
    
    // Only proceed if the image is currently hidden
    if (image.style.opacity == 0) {
        image.style.opacity = 1; // Make the image fully visible
        circlesFound++; // Increment the found circles count

        // Check if all circles have been found
        if (circlesFound === totalCircles) {
            document.getElementById("nextLevelButton").style.display = "block"; // Show the Next Level button
        }
    }
}
