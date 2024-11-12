let circlesFound = 0; 
const totalCircles = 4; 

function changeOpacity(imageId) {
    var image = document.getElementById(imageId);
    
    
    if (image.style.opacity == 0) {
        image.style.opacity = 1; 
        circlesFound++;

        
        if (circlesFound === totalCircles) {
            document.getElementById("nextLevelButton").style.display = "block"; // Show the Next Level button
        }
    }
}
