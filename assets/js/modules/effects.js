/**
 * Effects Module
 * Handles visual effects like parallax and glow
 */

/**
 * Parallax background effect
 */
export function parallaxBackground() {
    const bgGrid = document.querySelector(".bg-grid");
    if (!bgGrid) return;

    const scrolled = window.pageYOffset;
    bgGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
}

/**
 * Mouse glow effect on glass cards
 */
export function initMouseGlow() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".glass-card");

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

/**
 * Typing effect for text elements
 */
export function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
