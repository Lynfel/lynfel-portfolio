/**
 * Navigation Module
 * Handles all navigation-related functionality
 */

// Configuration
const HEADER_OFFSET = 80;
const SCROLL_OFFSET = 150;

// Section groupings for nav highlighting
const groupedSections = {
    home: ["home"],
    about: ["about", "hobbies"],
    journey: ["journey"],
    skills: ["skills"],
    projects: ["projects"],
    contact: ["contact"]
};

/**
 * Initialize burger menu toggle
 */
export function initBurgerMenu() {
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinksContainer = document.getElementById("navLinks");

    if (!burgerMenu || !navLinksContainer) return;

    burgerMenu.addEventListener("click", () => {
        navLinksContainer.classList.toggle("show");
        burgerMenu.classList.toggle("active");
        document.body.style.overflow = navLinksContainer.classList.contains("show") ? "hidden" : "";
    });
}

/**
 * Initialize navigation link click handlers
 */
export function initNavLinks() {
    const navLinks = document.querySelectorAll("#navLinks a");
    const navLinksContainer = document.getElementById("navLinks");
    const burgerMenu = document.getElementById("burgerMenu");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Close mobile menu
            if (navLinksContainer) navLinksContainer.classList.remove("show");
            if (burgerMenu) burgerMenu.classList.remove("active");
            document.body.style.overflow = "";

            // Smooth scroll to section
            const targetId = link.getAttribute("href").substring(1);
            scrollToSection(targetId);
        });
    });
}

/**
 * Smooth scroll to a section by ID
 */
export function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

/**
 * Update active nav link based on scroll position
 */
export function updateActiveNav() {
    const navLinks = document.querySelectorAll("#navLinks a");
    const scrollPosition = window.scrollY + SCROLL_OFFSET;

    Object.keys(groupedSections).forEach((navItem) => {
        groupedSections[navItem].forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${navItem}`) {
                            link.classList.add("active");
                        }
                    });
                }
            }
        });
    });
}

/**
 * Initialize smooth scroll for all anchor links
 */
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
}
