/* PAGE NAVIGATION SYSTEM */
const nextButtons = document.querySelectorAll('.nav-btn.next-btn');
const prevButtons = document.querySelectorAll('.nav-btn.prev-btn');

// NEXT PAGE CLICK (Turns page left)
nextButtons.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (!pageTurn.classList.contains('turn')) {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
});

// PREVIOUS PAGE CLICK (Turns page right back)
prevButtons.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
    }
});

/* CONTACT BUTTON AUTO FLIP */
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

/* REVERSE INDEX */
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

/* BACK PROFILE BUTTON */
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

/* OPENING ANIMATION VIA BUTTON CLICK */
const coverRight = document.querySelector('.cover.cover-right');
const openBookBtn = document.getElementById('open-book-btn');

openBookBtn.onclick = () => {
    coverRight.classList.add('turn');
    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 700);

    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 300);
    });
};

/* TYPING EFFECT */
const texts = [
    "Machine Learning Enthusiast",
    "Artificial Intelligence Developer",
    "Data Science Student",
    "Power BI Dashboard Developer",
    "Computer Vision Explorer",
    "AWS Cloud Learner",
    "Future Software Engineer"
];

let speed = 100;
const textElement = document.querySelector('.typing-text');
let textIndex = 0;
let charIndex = 0;

function typeWriter(){
    if(charIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    }else{
        setTimeout(eraseText, 1500);
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }else{
        textIndex++;
        if(textIndex >= texts.length){
            textIndex = 0;
        }
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

/* PARTICLES */
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        color: { value: "#00f7ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f7ff",
            opacity: 0.4,
            width: 1
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});