const nav = document.querySelector("nav");
const links = document.querySelectorAll(".nav-item");

nav.onclick = function (event) {
  links.forEach(function (link) {
    link.classList.toggle("hidden");
    link.classList.toggle("shown");
  })
};

nav.onfocusout = function(){
  console.log("hide me!");
  links.forEach(function(link){
    link.classList.remove("shown");
    link.classList.add("hidden");
  })
};