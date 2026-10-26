const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const modal = document.querySelector('.photo-modal');
document.querySelector('.portrait-button').addEventListener('click', () => modal.classList.add('open'));
document.querySelector('.modal-close').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.remove('open'); });

const projectModal = document.querySelector('.project-modal');
const projectOpen = document.querySelector('.project-details-trigger');
const projectClose = document.querySelector('.project-modal-close');
function openProjectDetails() {
  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  projectClose.focus();
}
function closeProjectDetails() {
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  projectOpen.focus();
}
projectOpen.addEventListener('click', openProjectDetails);
projectClose.addEventListener('click', closeProjectDetails);
projectModal.addEventListener('click', event => {
  if (event.target === projectModal) closeProjectDetails();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && projectModal.classList.contains('open')) closeProjectDetails();
});
