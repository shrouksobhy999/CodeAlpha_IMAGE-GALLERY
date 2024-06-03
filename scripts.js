document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-image");
    let currentIndex = 0;

    const showImage = index => {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
            img.style.opacity = i === index ? 1 : 0;
        });
    };

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
