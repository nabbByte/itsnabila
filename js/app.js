document.addEventListener('DOMContentLoaded', () => {
    // Subtle particle background — kept lightweight for a smoother experience.
    if (typeof particlesJS === 'function') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 45, density: { enable: true, value_area: 900 } },
                color: { value: '#72c8ff' },
                shape: { type: 'circle' },
                opacity: { value: 0.28, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 145, color: '#72c8ff', opacity: 0.13, width: 1 },
                move: { enable: true, speed: 1.2, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: false },
                    resize: true
                },
                modes: { repulse: { distance: 110, duration: 0.4 } }
            },
            retina_detect: true
        });
    }

    const navbar = document.getElementById('main-navbar');
    const backToTop = document.getElementById('backToTop');

    const updateScrollUI = () => {
        const scrolled = window.scrollY > 30;
        navbar?.classList.toggle('scrolled', scrolled);
        backToTop?.classList.toggle('show', window.scrollY > 500);
    };

    updateScrollUI();
    window.addEventListener('scroll', updateScrollUI, { passive: true });

    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close the mobile menu after selecting a section.
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('navbarNav');
            if (menu?.classList.contains('show') && typeof bootstrap !== 'undefined') {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
});
