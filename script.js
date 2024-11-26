document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Ensure the Home page is active on load
    pages[0].classList.add('active');

    // Navigation
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;

        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Show the selected page
        document.getElementById(pageId).classList.add('active');
      });
    });

    // Customization Controls
    document.getElementById('text-color').addEventListener('input', (e) => {
      body.style.color = e.target.value;
    });

    document.getElementById('bg-color').addEventListener('input', (e) => {
      body.style.background = e.target.value;
    });

    document.getElementById('font-family').addEventListener('change', (e) => {
      body.style.fontFamily = e.target.value;
    });

    document.getElementById('font-size').addEventListener('input', (e) => {
      body.style.fontSize = `${e.target.value}px`;
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      darkModeToggle.textContent = body.classList.contains('dark-mode')
        ? 'Disable Dark Mode'
        : 'Enable Dark Mode';
    });
  });