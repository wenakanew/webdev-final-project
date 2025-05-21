// Toggle mobile menu visibility
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('hidden');
});

// Toggle "Read More" text on blog excerpts
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const extraText = button.nextElementSibling;
    if (extraText.classList.contains('hidden')) {
      extraText.classList.remove('hidden');
      button.textContent = 'Read Less';
    } else {
      extraText.classList.add('hidden');
      button.textContent = 'Read More';
    }
  });
});
