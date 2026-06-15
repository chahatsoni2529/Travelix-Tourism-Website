document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE RESPONSIVE HAMBURGER MENU
    // ==========================================
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-menu');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Subtle rotation animation for the hamburger lines
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.classList.toggle(`open-${index}`);
            });
        });
    }

    // ==========================================
    // 2. DYNAMIC DESTINATION CATEGORY FILTERING
    // ==========================================
    const filterButtons = document.querySelectorAll('.btn-filter');
    const destinationCards = document.querySelectorAll('.destination-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active style state from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Set active class on clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            destinationCards.forEach(card => {
                // Read custom structural data-attribute
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    // Trigger dynamic fade-in animation
                    card.style.animation = 'fadeInUp 0.5s ease forward';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // 3. BASIC SUBMIT EVENT HANDLING (FORM PAGE)
    // ==========================================
    const contactForm = document.getElementById('travelix-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Travelix has securely received your submission.');
            contactForm.reset();
        });
    }
});