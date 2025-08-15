window.addEventListener('scroll', function() {
  document.getElementById('topo-btn').style.display = window.scrollY > 200 ? 'block' : 'none';
});
document.getElementById('topo-btn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};