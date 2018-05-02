const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

logo.onclick = function(){
  nav.classList.toggle("open");
  this.classList.toggle("on-edge");
};