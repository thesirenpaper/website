document.addEventListener('DOMContentLoaded', () => {
    const mobileThreshold = 768;
    const modal = document.getElementById('mobile-warning-modal');
    const closeBtn = modal.querySelector('.modal-close-btn');
    const acceptBtn = modal.querySelector('.modal-accept-btn');
    const sessionKey = 'siren_mobile_warning_shown';

    const showModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    };

    const hideModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        sessionStorage.setItem(sessionKey, 'true');
    };

    if (window.innerWidth <= mobileThreshold && !sessionStorage.getItem(sessionKey)) {
        setTimeout(showModal, 500); 
    }

    closeBtn.addEventListener('click', hideModal);
    acceptBtn.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
});