document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typewriter");
    const textArray = ["Web Developer", "Network Administrator", "Tech Enthusiast"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        let currentText = textArray[index];
        textElement.innerHTML = currentText.substring(0, charIndex);

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) index = (index + 1) % textArray.length;
            setTimeout(type, 1000);
        }
    }

    type();
});

function animateSkills() {
    const skills = document.querySelectorAll(".progress");
    const section = document.querySelector("#about");
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute("data-width");
        });
        window.removeEventListener("scroll", animateSkills);
    }
}

window.addEventListener("scroll", animateSkills);

function animateAboutMe() {
    const aboutSection = document.querySelector("#about");
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        aboutSection.classList.add("show");
        window.removeEventListener("scroll", animateAboutMe);
    }
}

window.addEventListener("scroll", animateAboutMe);

function animateProjects() {
    const projectsSection = document.querySelector("#projects");
    const sectionTop = projectsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        projectsSection.classList.add("show");
        window.removeEventListener("scroll", animateProjects);
    }
}

window.addEventListener("scroll", animateProjects);

function animateTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (itemTop < screenHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateTimeline);


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for reaching out! I'll get back to you soon.");
    document.getElementById("contact-form").reset();
});

// Contact Section Animation
function animateContact() {
    const contactSection = document.querySelector("#contact");
    const sectionTop = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        contactSection.classList.add("show");
        window.removeEventListener("scroll", animateContact);
    }
}

window.addEventListener("scroll", animateContact);


window.addEventListener("scroll", function () {
    const scrollProgress = document.getElementById("scroll-progress");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + "%";
});
