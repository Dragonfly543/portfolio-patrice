'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
const dialog = document.querySelector('.lightbox');
document.querySelectorAll('.zoom').forEach(link => link.addEventListener('click', event => {
  if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  dialog.querySelector('img').src = link.href;
  dialog.querySelector('img').alt = link.querySelector('img').alt;
  dialog.querySelector('figcaption').textContent = link.dataset.caption;
  dialog.showModal(); document.body.classList.add('modal-open');
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => { document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); }); }));
document.querySelector('#year').textContent = new Date().getFullYear();
