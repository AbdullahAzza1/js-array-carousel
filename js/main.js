let currentImg = 0;
const images = document.querySelectorAll("#carousel img");
images[currentImg].classList.add("active");



document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }
});

document.getElementById("prevBtn").addEventListener("click", function() {
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
});
    
