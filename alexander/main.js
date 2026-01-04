const image = document.getElementById("swapImage");

const images = [
    "alexander2.webp",
    "alexander3.avif"
];

let current = 0;

image.addEventListener("click", () => {
    current = (current + 1) % images.length;
    image.src = images[current];
});
