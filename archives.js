document.addEventListener('DOMContentLoaded', () => {
    const archiveButtons = document.querySelectorAll('.archive-button');
    const lightbox = document.getElementById('lightbox');
    const pdfViewer = document.getElementById('pdf-viewer');
    const closeBtn = document.getElementById('close-btn');

    archiveButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfURL = button.getAttribute('data-pdf-url');
            if (pdfURL) {
                pdfViewer.src = pdfURL;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        pdfViewer.src = '';
        document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            pdfViewer.src = '';
            document.body.style.overflow = '';
        }
    });
});
