// Get the modal element
var modal = document.getElementById("imageModal");

// Get all images in the gallery
var images = document.querySelectorAll(".img-container .imgg img");

// Get the modal image element
var modalImg = document.getElementById("img01");

// Add click event listeners to all gallery images
images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the close button element
var close = document.getElementsByClassName("close")[0];

// Add click event listener to close button
close.addEventListener("click", function() {
  modal.style.display = "none";
});

