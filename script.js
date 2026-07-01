document.addEventListener('DOMContentLoaded', () => {
    // Reveal Nav on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(9, 9, 11, 0.8)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Scroll Animations
    const scrollElements = document.querySelectorAll('.scroll-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            } else {
                // Remove class when element is out of view so it animates again
                entry.target.classList.remove('scrolled');
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    scrollElements.forEach(el => observer.observe(el));

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // adjust for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
