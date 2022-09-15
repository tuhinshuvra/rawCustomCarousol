const images = [
    'images/desk1.jpg',
    'images/desk2.jpg',
    'images/desk3.jpg',
    'images/desk4.jpg',
    'images/desk5.jpg',
    'images/desk6.jpg',
    'images/desk7.jpg',
]
let imgIndex = 0;
const sliderImg = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    sliderImg.setAttribute('src', imgLink);
    console.log(imgLink),
        imgIndex++;
}, 1500)