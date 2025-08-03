// Typewriter effect
const phrases = [
  "I am a Web Developer",
  "I am a MERN Stack Developer",
  "I am a Front-End Engineer",
  "I am a Lifelong Learner",
];

const typewriter = document.getElementById("typewriter");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  typewriter.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}
type();

// Skills carousel
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Git",
  "C++",
  "Java",
];
let skillIndex = 0;
const skillsContainer = document.getElementById("skills-carousel");

function updateSkills() {
  skillsContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const index = (skillIndex + i) % skills.length;
    const span = document.createElement("span");
    span.textContent = skills[index];
    if (i === 2) span.classList.add("highlight");
    skillsContainer.appendChild(span);
  }
  skillIndex = (skillIndex + 1) % skills.length;
}
setInterval(updateSkills, 1000);
updateSkills();

// Project slideshow
const slides = document.querySelectorAll(".project-slide");
let projectIndex = 0;
function rotateProjects() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === projectIndex);
  });
  projectIndex = (projectIndex + 1) % slides.length;
}
setInterval(rotateProjects, 5000);

// Certifications
function showCert(certId) {
  const certDisplay = document.getElementById("cert-display");
  certDisplay.innerHTML = `<img src="images/${certId}.jpg" alt="${certId} Certification" />`;
}

// Nav hide/show on scroll
let lastScrollY = window.scrollY;
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  nav.style.top = currentScrollY > lastScrollY ? "-80px" : "0";
  lastScrollY = currentScrollY;
});
