const images = Array.from(document.querySelectorAll('.image-button img'));
const triggers = Array.from(document.querySelectorAll('.image-button'));
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCount = lightbox.querySelector('.lightbox-count');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
let currentIndex = 0;

function showImage(index) {
  currentIndex = (index + images.length) % images.length;
  const selected = images[currentIndex];
  lightboxImage.src = selected.src;
  lightboxImage.alt = selected.alt;
  lightboxCount.textContent = String(currentIndex + 1).padStart(2, '0') + ' / ' + String(images.length).padStart(2, '0');
}

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    showImage(Number(trigger.dataset.index));
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (event.key === 'ArrowRight') showImage(currentIndex + 1);
});

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'CLOSE' : 'MENU';
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'MENU';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
