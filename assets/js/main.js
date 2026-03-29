/**
 * lynfel258 Portfolio - Main JavaScript Entry Point
 * Imports and initializes all modules
 */

// Import modules
import {
    initBurgerMenu,
    initNavLinks,
    updateActiveNav,
    initSmoothScroll
} from './modules/navigation.js';

import {
    revealOnScroll,
    animateSkillBars,
    handleHeaderScroll,
    initIntersectionObserver
} from './modules/scroll.js';

import {
    parallaxBackground,
    initMouseGlow
} from './modules/effects.js';

import { hideLoadingScreen } from './modules/loader.js';

// ===================================
// INITIALIZATION
// ===================================

/**
 * Initialize all modules when DOM is ready
 */
function init() {
    // Navigation
    initBurgerMenu();
    initNavLinks();
    initSmoothScroll();
    updateActiveNav();

    // Scroll animations
    initIntersectionObserver(animateSkillBars);
    revealOnScroll();

    // Visual effects
    initMouseGlow();
}

// ===================================
// EVENT LISTENERS
// ===================================

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", init);

// Window Load (after all resources)
window.addEventListener("load", () => {
    hideLoadingScreen(() => {
        revealOnScroll();
    });
});

// Scroll events
window.addEventListener("scroll", () => {
    updateActiveNav();
    revealOnScroll();
    animateSkillBars();
    parallaxBackground();
    handleHeaderScroll();
});

