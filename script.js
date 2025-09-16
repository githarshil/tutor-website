// Hamburger menu toggle for mobile navigation

document.addEventListener('DOMContentLoaded', function() {
  const barIcon = document.querySelector('.fa-bars');
  const navLinks = document.querySelector('.mobile-nav .nav-links');

  if (barIcon && navLinks) {
    barIcon.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
});

// CSS needed for .active:
// .mobile-nav .nav-links.active {
//   transform: translateX(0);
//   transition: transform 0.3s ease;
// }
// .mobile-nav .nav-links {
//   transform: translateX(100%);
//   transition: transform 0.3s ease;
// }
