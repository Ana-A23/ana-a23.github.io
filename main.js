const words = wordRotatorTranslations.en;
const rotator = document.querySelector('.word-rotator i');
let idx = 0;

function showNextWord() {
    rotator.classList.add('fading');
    setTimeout(() => {
        idx = (idx + 1) % words.length;
        rotator.textContent = words[idx];
        rotator.classList.remove('fading');
    }, 500);
}
setInterval(showNextWord, 2200);

const projectLinks = document.querySelectorAll('.project-link');
const floatingImg = document.querySelector('.floating-project-image');
const projectsContainer = document.querySelector('.content-projects');

// Ensure floating image uses an <img> tag
if (!floatingImg.querySelector('img')) {
    const imgEl = document.createElement('img');
    imgEl.style.width = '100%';
    imgEl.style.height = 'auto';
    imgEl.style.display = 'block';
    floatingImg.appendChild(imgEl);
}

const floatingImgTag = floatingImg.querySelector('img');
projectLinks.forEach(linkDiv => {
    linkDiv.addEventListener('mouseenter', e => {
        const a = linkDiv.querySelector('a');
        const img = a.getAttribute('data-image');
        if (img) {
            floatingImgTag.src = img;
            floatingImg.style.top = '0px';
            floatingImg.classList.add('active');
        }
    });
    linkDiv.addEventListener('mouseleave', e => {
        floatingImg.classList.remove('active');
    });
    // Mobile: show image on click
    linkDiv.addEventListener('click', e => {
        if (window.innerWidth <= 600) {
            e.preventDefault();
            const a = linkDiv.querySelector('a');
            const img = a.getAttribute('data-image');
            if (img) {
                floatingImgTag.src = img;
                floatingImg.style.top = '0px';
                floatingImg.style.display = 'block';
                floatingImg.classList.add('active');
            }
        }
    });
});

// Hide floating image on mobile when clicking elsewhere
if (window.innerWidth <= 600) {
    document.body.addEventListener('click', function(e) {
        if (!e.target.closest('.project-link')) {
            floatingImg.classList.remove('active');
            floatingImg.style.display = '';
        }
    });
}

// Hamburger menu JS
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
}); 