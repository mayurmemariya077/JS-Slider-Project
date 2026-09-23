



let images = [
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400"
];

let index = 0;

let image = document.getElementById("image");
let next = document.getElementById("next");

next.addEventListener("click", function() {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    image.src = images[index];

});