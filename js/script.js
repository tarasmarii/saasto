"use strict";

let switchBtn = document.querySelector('.switcher');
switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("on");
});

let menuBtn = document.querySelector(".mobile__btn");
let nav = document.querySelector(".nav");

window.addEventListener("click", (e) => {
      if (e.target == menuBtn & !nav.classList.contains("show")) {
nav.classList.add('show');
menuBtn.classList.add("active");
      }
      else if (e.target == nav) {
        return;
      }
      else {
        nav.classList.remove('show');
        menuBtn.classList.remove("active");
      }

    });