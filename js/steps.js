// Steps Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Steps page loaded successfully');

    // Intersection Observer for scroll-based animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe step cards
    document.querySelectorAll('.step-card').forEach(card => {
        observer.observe(card);
    });

    // Observe stat items
    document.querySelectorAll('.stat-item').forEach(stat => {
        observer.observe(stat);
    });

    // Add hover sound effect simulation (visual feedback)
    document.querySelectorAll('.step-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Animate stat numbers on scroll
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);

            if (element.textContent.includes('%')) {
                element.textContent = `${current > 0 ? '+' : ''}${current}%`;
            } else if (element.textContent.includes('x')) {
                element.textContent = `-${(current / 10).toFixed(1)}x`;
            } else {
                element.textContent = `${current > 0 ? '+' : ''}${current}`;
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Trigger number animations when stats become visible
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const value = entry.target.querySelector('.stat-value');
                const text = value.textContent;

                entry.target.dataset.animated = 'true';

                if (text.includes('-60%')) {
                    animateValue(value, 0, -60, 1500);
                } else if (text.includes('+85%')) {
                    animateValue(value, 0, 85, 1500);
                } else if (text.includes('+40%')) {
                    animateValue(value, 0, 40, 1500);
                } else if (text.includes('-4.5x')) {
                    animateValue(value, 0, -45, 1500);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => {
        statObserver.observe(item);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add parallax effect to CTA section
    window.addEventListener('scroll', () => {
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            ctaSection.style.backgroundPosition = `0 ${rate}px`;
        }
    });

    // Feature items hover effect
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const svg = this.querySelector('svg circle');
            if (svg) {
                svg.style.transition = 'all 0.3s ease';
                svg.setAttribute('r', '8');
            }
        });

        item.addEventListener('mouseleave', function() {
            const svg = this.querySelector('svg circle');
            if (svg) {
                svg.setAttribute('r', '7');
            }
        });
    });
});

// Add stagger animation on page load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.step-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
