"use strict";

// 以下、ハンバーガーメニュー

function drawer(){
  document.getElementById("line1").classList.toggle("line_1");
  document.getElementById("line2").classList.toggle("line_2");
  document.getElementById("line3").classList.toggle("line_3");
  document.getElementById("navigation").classList.toggle("in");
}

document.getElementById("drawer-navigation").addEventListener("click", () => {
  drawer(),false;
});

// ナビ表示時にナビクリックするとナビが非表示になる
function close(){
  document.getElementById("navigation").classList.remove("in");
  document.getElementById("line1").classList.remove("line_1");
  document.getElementById("line2").classList.remove("line_2");
  document.getElementById("line3").classList.remove("line_3");
}

document.querySelector(".nav_01").addEventListener("click", () => {
  close(),false;
});
document.querySelector(".nav_02").addEventListener("click", () => {
  close(),false;
});
document.querySelector(".nav_03").addEventListener("click", () => {
  close(),false;
});
document.querySelector(".nav_04").addEventListener("click", () => {
  close(),false;
});
document.querySelector(".nav_05").addEventListener("click", () => {
  close(),false;
});

// 以上、ハンバーガーメニュー





//以下、トップスライダー

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let intervalId;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function autoPlay() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 最初は最初のスライドを表示
showSlide(currentSlide);

// 自動再生開始（3秒ごとにスライド）
intervalId = setInterval(autoPlay, 3000);


// 以上、トップスライダー




// 以下、粉雪パーティクル

let snowContainer = document.querySelector(".slider-container-box");

const createSnow = () => {
  let snow = document.createElement("span");
  snow.className = "snow";

  const minSize = 5;
  const maxSize = 10;

  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  snow.style.left = Math.random() * 100 + "%";

  snowContainer.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 10000);
};

setInterval(createSnow, 100);

// 以上、粉雪パーティクル






// 以下、スクロールリビアル（フレームワーク）でフワッとアニメーション

ScrollReveal({
  reset: false,
  duration: 1500,
});

ScrollReveal().reveal('.sec-01 h2, .sec-03 h2, .sec-05 h2', { delay: 400, origin: "left", distance: "100px" });
ScrollReveal().reveal('.sec-01 .cottage, .sec-03 .cottage, .sec-05 .cottage', { delay: 700, scale: .8 });
ScrollReveal().reveal('.sec-01 p, .sec-05 p', { delay: 900, origin: "right", distance: "100px" });
ScrollReveal().reveal('.sec-03 p', { delay: 900, origin: "left", distance: "100px" });

ScrollReveal().reveal('.sec-02 h2, .sec-04 h2', { delay: 700, rotate: {x:200, y:0, z:0} });
ScrollReveal().reveal('.sec-02 p, .sec-04 p', { delay: 900, rotate: {x:200, y:0, z:0} });

ScrollReveal().reveal('footer ul li', { delay: 700, origin: "bottom", interval: 200, distance: "100px" });

// 以上、スクロールリビアル（フレームワーク）でフワッとアニメーション

