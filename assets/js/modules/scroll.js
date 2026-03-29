/**
 * Scroll Module
 * Handles scroll-related functionality
 */

/**
 * Reveal elements on scroll
 */
export function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            setTimeout(() => {
                element.classList.add("active");
            }, index * 50);
        }
    });
}

/**
 * Animate skill progress bars
 */
export function animateSkillBars() {
    const progressBars = document.querySelectorAll(".progress");
    const skillsSection = document.getElementById("skills");

    if (!skillsSection) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        progressBars.forEach((bar) => {
            const width = bar.getAttribute("data-width");
            if (width && !bar.classList.contains("animated")) {
                bar.style.width = width + "%";
                bar.classList.add("animated");
            }
        });
    }
}

/**
 * Handle header background on scroll
 */
export function handleHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = "rgba(10, 10, 15, 0.95)";
    } else {
        header.style.background = "rgba(10, 10, 15, 0.8)";
    }
}

/**
 * Initialize Intersection Observer for reveal animations
 */
export function initIntersectionObserver(animateSkillBarsFn) {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");

                if (entry.target.closest("#skills")) {
                    animateSkillBarsFn();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
}
