const signUp=document.querySelector(".signUp");
const signUpButton=document.querySelector(".signUp a");
const spreadButton=document.querySelector(".spread-navbar");
const navbarList=document.querySelector(".navbar ul");
const copyright=document.getElementById("copyright");
const navbar=document.querySelector("nav");
const NavbarList=document.querySelector(".navbarList");
signUp.addEventListener("mouseover",function(){
        if(window.innerWidth>950){
            signUpButton.classList.add("translateButton");
        }
})
//showing up the button effect on if it's viewport is  computer
signUp.addEventListener("mouseout", function() {
        if(window.innerWidth>950){
            signUpButton.classList.remove("translateButton");
        }
});

spreadButton.addEventListener("click",function(){
    // navbarList.classList.toggle("show");
    if(window.innerWidth<950){
        NavbarList.classList.toggle("show");
        navbarList.classList.toggle("show");
        document.body.classList.toggle("overflow-hidden");
    }
})
let currentDate=new Date().getFullYear();
let current=copyright.innerText;
copyright.innerText=current+ " "+currentDate;