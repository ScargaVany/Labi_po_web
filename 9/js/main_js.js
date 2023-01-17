let btn_burger = document.querySelector(".menu");
let nav = document.querySelector(".header");
let category = document.querySelector(".main-post");

btn_burger.addEventListener("click", function(){
    nav.classList.toggle("open");
    category.classList.toggle("open");
});