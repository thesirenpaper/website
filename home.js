const openPdfBtn = document.getElementById('open-pdf-btn')
const lightbox = document.getElementById('lightbox')
const pdfViewer = document.getElementById('pdf-viewer')
const closeBtn = document.getElementById('close-btn')
const pdfURL = "/assets/The Siren, Issue 4.pdf"

openPdfBtn.addEventListener('click', () => {
    pdfViewer.src = pdfURL
    lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active')
    pdfViewer.src = ""
    document.body.style.overflow = ''
})

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active')
        pdfViewer.src = ""
        document.body.style.overflow = ''
    }
})
