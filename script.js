
  // Select elements
  const themeToggle = document.getElementById('themeToggle');
  const navbar = document.getElementById('navbar');
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  if (savedTheme === 'dark') {
    body.classList.add('bg-dark', 'text-white');
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
    themeToggle.textContent = 'Light Mode';
  }

  // Theme toggle event listener
  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('bg-dark')) {
      // Switch to Light Mode
      body.classList.remove('bg-dark', 'text-white');
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.classList.add('navbar-light', 'bg-light');
      themeToggle.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to Dark Mode
      body.classList.add('bg-dark', 'text-white');
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.classList.add('navbar-dark', 'bg-dark');
      themeToggle.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark');
    }
  });

