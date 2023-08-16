const list = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"
];

const tag = document.createElement('div');
tag.classList.add('img');
document.body.appendChild(tag);
const html = document.querySelector(".img");
html.style.backgroundImage = "url(./images/" + list[Math.floor(Math.random() * list.length)] + ")";