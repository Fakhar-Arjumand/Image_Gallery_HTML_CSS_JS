document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentImgIndex;

    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            lightbox.style.display = 'block';
            lightboxImg.src = e.target.src;
            currentImgIndex = [...gallery.children].indexOf(e.target);
        }
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex === 0) ? gallery.children.length - 1 : currentImgIndex - 1;
        lightboxImg.src = gallery.children[currentImgIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentImgIndex = (currentImgIndex === gallery.children.length - 1) ? 0 : currentImgIndex + 1;
        lightboxImg.src = gallery.children[currentImgIndex].src;
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
