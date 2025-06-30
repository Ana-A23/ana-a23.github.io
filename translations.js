// Translations object
const translations = {
    en: {
        about: {
            title: "I'm Ana, <i>brazilian</i> product designer<br>with practice in <span class=\"word-rotator\"><i>user interface</i></span>",
            description: "With skills in research, prototyping and visual design, I'm always looking for the best user experience in every project. I love working in teams, collaborating in creative processes, and staying up to date with the latest market trends. Additionally, I'm communicative, proactive and organized, characteristics that help me handle deadlines and challenging projects. Let's exchange ideas and create something amazing together?",
            downloadCV: "Download my CV"
        },
        projects: {
            title: "Selected projects"
        },
        contact: {
            title: "Contact info"
        },
        mobileMenu: {
            about: "About me",
            projects: "Selected projects",
            contact: "Contact"
        },
        navLinks: {
            about: "About",
            projects: "Projects",
            contact: "Contact"
        }
    },
    pt: {
        about: {
            title: "Sou Ana, product <i>designer</i><br>com prática em <span class=\"word-rotator\"><i>interface do usuário</i></span>",
            description: "Com habilidades em pesquisa, prototipagem e design visual, estou sempre em busca da melhor experiência do usuário em cada projeto. Adoro trabalhar em equipes, colaborar em processos criativos e me manter atualizada com as últimas tendências do mercado. Além disso, sou comunicativa, proativa e organizada, características que me ajudam a lidar com prazos e projetos desafiadores. Vamos trocar ideias e criar algo incrível juntos?",
            downloadCV: "Baixar meu CV"
        },
        projects: {
            title: "Projetos selecionados"
        },
        contact: {
            title: "Informações de contato"
        },
        mobileMenu: {
            about: "Sobre mim",
            projects: "Projetos selecionados",
            contact: "Contato"
        },
        navLinks: {
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato"
        }
    }
};

// Word rotator translations
const wordRotatorTranslations = {
    en: [
        'Design systems',
        'Prototyping',
        'Branding',
        'User interface',
        'User experience',
        'Interaction design'
    ],
    pt: [
        'Sistemas de design',
        'Prototipagem',
        'Branding',
        'Interface do usuário',
        'Experiência do usuário',
        'Design de interação'
    ]
};

// Language switching functionality
function switchLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active language in selectors
    document.querySelectorAll('.language-selector span').forEach(span => {
        span.classList.remove('active');
        if (span.textContent.toLowerCase() === lang) {
            span.classList.add('active');
        }
    });

    // Update content
    const t = translations[lang];
    
    // Update hero section
    document.querySelector('.hero h1').innerHTML = t.about.title;
    document.querySelector('.content-about p').textContent = t.about.description;
    document.querySelectorAll('.button').forEach(button => {
        if (button.textContent.trim() === translations.en.about.downloadCV || 
            button.textContent.trim() === translations.pt.about.downloadCV) {
            button.textContent = t.about.downloadCV;
        }
    });

    // Update projects section
    document.querySelector('.projects h2').textContent = t.projects.title;

    // Update contact section
    document.querySelector('.contact h2').textContent = t.contact.title;

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        if (t.navLinks[href]) {
            link.textContent = t.navLinks[href];
        }
    });

    // Update mobile menu
    document.querySelectorAll('.mobile-nav section h2').forEach((h2, index) => {
        const sections = ['about', 'projects', 'contact'];
        h2.textContent = t.mobileMenu[sections[index]];
    });

    // Update word rotator
    const words = wordRotatorTranslations[lang];
    const rotator = document.querySelector('.word-rotator i');
    if (rotator) {
        rotator.textContent = words[0];
    }
}

// Add click handlers to language selectors
document.addEventListener('DOMContentLoaded', () => {
    // Initialize word rotator
    const rotator = document.querySelector('.word-rotator i');
    if (rotator) {
        const words = wordRotatorTranslations.en;
        rotator.textContent = words[0];
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
    }

    // Add language selector click handlers
    document.querySelectorAll('.language-selector span').forEach(span => {
        span.addEventListener('click', () => {
            const lang = span.textContent.toLowerCase();
            switchLanguage(lang);
        });
    });
}); 