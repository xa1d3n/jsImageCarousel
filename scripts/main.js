var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var galleryContainer = document.getElementById("galleryContainer");


/*
 * Show navigation arrows on carousel hover
*/

galleryContainer.onmouseover = function() {
	nextBtn.style.display = "block";
	prevBtn.style.display = "block";
}

/*
 * Hide navigation arrows on carousel mouse out
*/
galleryContainer.onmouseout = function() {
	nextBtn.style.display = "none";
	prevBtn.style.display = "none";
}

/*
 * Handle righ button
*/

nextBtn.onclick = function() {
	moveCarousel("right");
}

/*
 * Handle left arrrow
*/
prevBtn.onclick = function() {
	moveCarousel("left");
}

/*
 * Move the items in carousel
 * depending on button clicked
*/

moveCarousel = function(direction) {
	var imgGallery = document.getElementById("gallery");
	var firstImg = imgGallery.firstElementChild;
	var lastImg = imgGallery.lastElementChild;
	var imgWidth = firstImg.offsetWidth;

	var galleryIndent = parseInt(window.getComputedStyle(imgGallery).left);

	if (direction === "right") {
		// replace first image with last for infinite scrolling
		imgGallery.insertBefore(firstImg, lastImg.nextElementSibling);
	} 
	else {
		// replace first image with last for infinite scrolling
		imgGallery.insertBefore(lastImg, firstImg);
	} 
	

	// reset to original position
	imgGallery.style.left = -250 + "px";
}