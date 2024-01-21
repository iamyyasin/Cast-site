const navLinksArea = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');

navLinksArea.addEventListener('click', function (e) {
  link(e.target.getAttribute('href'));
});

function link(navHref) {
  navLinks.forEach((nav) => {
    const navValue = nav.getAttribute('href');

    if (navHref === navValue) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });
}
