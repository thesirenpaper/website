// --- JavaScript for Team Modal Functionality ---

/**
 * Sets up event listeners for the team member buttons and modals.
 * Allows opening a modal by clicking a member photo, and closing it
 * by clicking the 'X' button, clicking the overlay, or pressing ESC.
 */
function setupTeamInteractions() {
    const memberButtons = document.querySelectorAll('.member-button');
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close-btn');

    // Open Modal
    memberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const memberId = button.getAttribute('data-member-id');
            const modal = document.getElementById(`modal-${memberId}`);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Modal by X button
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop event from propagating to the overlay
            const memberId = button.getAttribute('data-member-id');
            const modal = document.getElementById(`modal-${memberId}`);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });

    // Close Modal by clicking outside (on overlay)
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            // Check if the click target is the overlay itself, not the content inside
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });

    // Close Modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalOverlays.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });
}

// Run setup when the window is fully loaded to ensure all DOM elements exist.
window.onload = function() {
    // Assuming menu.js uses DOMContentLoaded or is already set up.
    setupTeamInteractions();
};
