function adjustLinkWidth() {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.style.width = 'auto';
  });

  const linkContainerWidth = links[0].parentElement.offsetWidth;
  const linkCount = links.length;
  const totalLinkWidth = Array.from(links).reduce((acc, link) => acc + link.offsetWidth, 0);
  const linkWidth = totalLinkWidth / linkCount;

  if (totalLinkWidth > linkContainerWidth) {
    links.forEach(link => {
      link.style.width = `${linkWidth}px`;
    });
  }
}

window.addEventListener('resize', adjustLinkWidth);
window.addEventListener('load', adjustLinkWidth);
