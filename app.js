var boldText = document.getElementById("boldText");
var image = document.getElementById("image");
var hoverText = document.querySelector(".hover-text");
var heading = document.getElementById("heading");
var underlineParagraph = document.getElementById("underlineParagraph");
var imageButton = document.getElementById("imageButton");

boldText.addEventListener("click", function() {
    boldText.style.fontWeight = "bold";
});
image.addEventListener("mouseover", function() {
    image.style.display = "none";
    hoverText.style.display = "block";
});

image.addEventListener("mouseout", function() {
    image.style.display = "block";
    hoverText.style.display = "none";
});


let isImage1Visible = true;

imageButton.addEventListener("click", function() {
    if (isImage1Visible) {
        image.src = "p2.jpg";
    } else {
        image.src = "Porsche.jpg";
    }
    isImage1Visible = !isImage1Visible;
});
