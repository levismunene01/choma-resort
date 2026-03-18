/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){
menuToggle.addEventListener("click", () => {
nav.classList.toggle("active");
});
}


/* CLOSE MENU AFTER CLICK (MOBILE) */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("active");
});
});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){
section.style.opacity = "1";
section.style.transform = "translateY(0)";
}

});

});


/* INITIAL SECTION STYLE */

sections.forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(60px)";
section.style.transition = "all 0.8s ease";
});


/* GALLERY LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-container img");

let lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

lightbox.innerHTML = `
<span class="close-lightbox">&times;</span>
<img src="">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-lightbox");


galleryImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = image.src;

});

});


closeBtn.addEventListener("click", () => {
lightbox.style.display = "none";
});


lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){
lightbox.style.display = "none";
}

});


/* RESERVATION FORM */

const form = document.querySelector(".reservation-form");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

alert("Reservation request received. We will contact you shortly.");

form.reset();

});
}
