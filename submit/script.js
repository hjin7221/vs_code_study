function adjustLinkWidth() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.style.width = `${link.parentElement.offsetWidth}px`;
  });
}

window.addEventListener('resize', adjustLinkWidth);
