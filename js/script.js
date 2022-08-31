let menu = document.getElementById("menu");
let menuBar = document.getElementById("menu-bar");
let header = document.getElementById("header");
let menuLi = document.querySelectorAll(".navbar li");


menuBar.addEventListener('click' ,()=>{
  menu.classList.toggle('phone-menu')
})


window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 768){
  menu.classList.remove('phone-menu')
    
  }
})

window.addEventListener('scroll', ()=>{
  if(this.scrollY > 100){
    header.classList.add("header-onscroll-effect");
  }else if(this.scrollY < 100){
    header.classList.remove("header-onscroll-effect");
  }
})