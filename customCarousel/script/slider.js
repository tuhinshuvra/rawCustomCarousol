const images = [
    'images/desk1.jpg',
    'images/desk2.jpg',
    'images/desk3.jpg',
    'images/desk4.jpg',
    'images/desk5.jpg',
    'images/desk6.jpg',
    'images/desk7.jpg'
];

let imgIndex = 0;
const imgId = document.getElementById('slider');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    let imgLink = images[imgIndex];

    imgId.setAttribute('src', imgLink);

    console.log(imgLink);

    imgIndex++;
}, 1000)