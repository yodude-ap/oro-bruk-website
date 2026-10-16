// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const header = document.getElementById('main-header');
const headerInner = document.getElementById('header-inner');
const contactForm = document.getElementById('contact-form');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', String(!isHidden));
    });
}

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (mobileMenuBtn) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Navbar pure transparency adjustment on scroll
window.addEventListener('scroll', () => {
    if (!header || !headerInner) return;

    if (window.scrollY > 20) {
        header.classList.remove('bg-paper');
        header.classList.add('bg-transparent');
        headerInner.classList.remove('py-4');
        headerInner.classList.add('py-2');
    } else {
        header.classList.add('bg-paper');
        header.classList.remove('bg-transparent');
        headerInner.classList.remove('py-2');
        headerInner.classList.add('py-4');
    }
});

// Contact form submission handler
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for reaching out to Oro Bruk Federation. We will contact you soon!');
        contactForm.reset();
    });
}