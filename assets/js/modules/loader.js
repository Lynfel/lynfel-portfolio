/**
 * Loader Module
 * Handles loading screen functionality
 */

/**
 * Hide loading screen with fade animation
 */
export function hideLoadingScreen(callback) {
    const loadingScreen = document.getElementById("loadingScreen");
    if (!loadingScreen) {
        if (callback) callback();
        return;
    }

    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            if (callback) callback();
        }, 500);
    }, 1500);
}
