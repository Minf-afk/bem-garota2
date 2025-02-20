const review = [
  {
    id: 1,
    name: "Roupa 1",
    img: "img/roupa1.jpeg",
    text: "As melhores roupas femininas você encontra aqui. Aproveite nossas promoções!",
  },
  {
    id: 2,
    name: "Roupa 2",
    img: "img/roupa2.jpeg",
    text: "As melhores roupas femininas você encontra aqui. Aproveite nossas promoções!",
  },
  {
    id: 3,
    name: "Roupa 3",
    img: "img/roupa3.jpeg",
    text: "As melhores roupas femininas você encontra aqui. Aproveite nossas promoções!",
  },
  {
    id: 4,
    name: "Roupa 4",
    img: "img/roupa4.jpeg",
    text: "As melhores roupas femininas você encontra aqui. Aproveite nossas promoções!",
  },
  {
    id: 5,
    name: "Roupa 5",
    img: "img/roupa5.jpeg",
    text: "As melhores roupas femininas você encontra aqui. Aproveite nossas promoções!",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
  startAutoSlide();
});

function showPerson() {
  const item = review[currentItem];
  img.classList.remove("active");
  setTimeout(() => {
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
    img.classList.add("active");
  }, 500);
}

nextBtn.addEventListener("click", function () {
  nextPerson();
});

prevBtn.addEventListener("click", function () {
  prevPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * review.length);
  showPerson();
});

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

function nextPerson() {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson();
}

function prevPerson() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson();
}

function startAutoSlide() {
  setInterval(nextPerson, 10000);
}
