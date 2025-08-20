window.addEventListener('scroll', function() {
  const btn = document.getElementById('topo-btn');
  if (window.scrollY > 200) {
    btn.classList.add('mostrar');
  } else {
    btn.classList.remove('mostrar');
  }
});
document.getElementById('topo-btn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};