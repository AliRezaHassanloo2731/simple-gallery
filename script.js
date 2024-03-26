"use strict";
const smallBord = document.querySelectorAll("img");
const bigBord = document.getElementById("big-bord");

smallBord.forEach((img) => {
  img.addEventListener("mouseover", function () {
    // delete img.dataset
    bigBord.innerHTML = "";
    const markup = `
    <img src="./image/img--${img.dataset.num}.jpg" alt="${img.dataset.num}" />`;
    bigBord.insertAdjacentHTML("afterbegin", markup);
  });
});
