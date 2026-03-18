// SECTION SCROLL ANIMATION

const sections = document.querySelectorAll("section");

function revealSections() {

sections.forEach(section => {

const sectionTop = section.getBoundingClientRect().top;
const triggerPoint = window.innerHeight * 0.8;

if(sectionTop < triggerPoint){
section.classList.add("visible");
}

});

}

window.addEventListener("scroll", revealSections);

// Run once when page loads
revealSections();
