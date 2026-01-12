// Project Data
const projects = [
    {
        id: 1,
        title: "E-Commerce Website",
        category: "E-Commerce",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Track Dashboard",
        category: "Fintech",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Neon Website",
        category: "Social Media",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "HealthAI Website",
        category: "Healthcare Website",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "TravelOut Website",
        category: "Travel",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Gallery Website",
        category: "Art & Culture",
        tags: ["HTML AND CSS", "JavaScript", "Node.js"],
        image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupScrollSpy();
});

// Render Projects
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <a href="#" class="project-link">Seccfully Completed <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Sticky Header & Scroll Spy
function setupScrollSpy() {
    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Scroll Spy
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.style.backgroundColor = 'var(--accent-dark)';
            btn.style.borderColor = 'var(--accent-dark)';
            btn.style.color = '#fff';

            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 3000);
        }, 1500);
    });
}

// Mobile Menu Toggle (Basic Implementation)
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        const isMenuOpen = nav.style.display === 'flex';

        if (!isMenuOpen) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = 'rgba(11, 12, 16, 0.95)';
            nav.style.padding = '20px';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.display = ''; // Reverts to CSS default (none for mobile, flex for desktop)
        }
    });
}
