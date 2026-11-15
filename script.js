const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const triggers = Array.from(document.querySelectorAll('.image-button'));
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-stage img');
const lightboxCount = lightbox.querySelector('.lightbox-count');
let currentIndex = 0;

/* ---------- Lightbox ---------- */
// 각 작품의 큰 사진 경로: srcset의 마지막(가장 큰) 파일을 사용합니다.
const works = triggers.map((trigger) => {
  const img = trigger.querySelector('img');
  const largest = (img.getAttribute('srcset') || '').split(',').pop().trim().split(/\s+/)[0];
  return { src: largest || img.getAttribute('src'), alt: img.alt };
});
const pad = (n) => String(n).padStart(2, '0');

function preload(index) {
  const work = works[(index + works.length) % works.length];
  const img = new Image();
  img.src = work.src;
}

function showImage(index) {
  currentIndex = (index + works.length) % works.length;
  const work = works[currentIndex];
  lightboxImage.classList.add('is-loading');
  lightboxImage.onload = () => lightboxImage.classList.remove('is-loading');
  lightboxImage.src = work.src;
  lightboxImage.alt = work.alt;
  if (lightboxImage.complete) lightboxImage.classList.remove('is-loading');
  lightboxCount.textContent = pad(currentIndex + 1) + ' / ' + pad(works.length);
  preload(currentIndex + 1);
  preload(currentIndex - 1);
}

triggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    showImage(index);
    lightbox.showModal();
    root.classList.add('is-locked');
  });
});

lightbox.addEventListener('close', () => root.classList.remove('is-locked'));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.classList.contains('lightbox-stage')) lightbox.close();
});
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (event.key === 'ArrowRight') showImage(currentIndex + 1);
});

// 모바일: 좌우로 밀어서 이전·다음 작품
let touchX = null;
let touchY = null;
lightbox.addEventListener('touchstart', (event) => {
  touchX = event.touches[0].clientX;
  touchY = event.touches[0].clientY;
}, { passive: true });
lightbox.addEventListener('touchend', (event) => {
  if (touchX === null) return;
  const dx = event.changedTouches[0].clientX - touchX;
  const dy = event.changedTouches[0].clientY - touchY;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showImage(currentIndex + (dx < 0 ? 1 : -1));
  touchX = null;
}, { passive: true });

/* ---------- Mobile menu ---------- */
function setMenu(open) {
  nav.classList.toggle('open', open);
  header.classList.toggle('nav-open', open);
  root.classList.toggle('is-locked', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'CLOSE' : 'MENU';
}
menuButton.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});

document.querySelector('#year').textContent = new Date().getFullYear();
