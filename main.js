
  // Scroll top button
  window.addEventListener('scroll', () => {
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 300);
  });

  // Active nav link
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });

  // Works filter

function filterWorks(type, btn) {
  document.querySelectorAll('.works-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const items = document.querySelectorAll('.work-col');
  items.forEach(item => {
    if (type === 'all' || item.getAttribute('data-type') === type) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
