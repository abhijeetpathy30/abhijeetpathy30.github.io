// AOS (Animate on Scroll) Initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });

  // Toggle visibility of contact information
  const contactButton = document.querySelector('.contact-toggle');
  const contactDetails = document.querySelector('.contact-details');

  if (contactButton && contactDetails) {
    contactButton.addEventListener('click', () => {
      contactDetails.classList.toggle('hidden');
    });
  }

  // Add smooth scroll effect to anchors
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Offset for header
          behavior: 'smooth',
        });
      }
    });
  });

  console.log("Page loaded and AOS initialized");
});
