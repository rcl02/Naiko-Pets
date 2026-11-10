/* ==========================================================================
   NAIKO PETS – comportamento da página
   ========================================================================== */

// Ano atual no rodapé
document.getElementById('y').textContent = new Date().getFullYear();

// Animação de entrada das seções (.reveal) ao rolar a página
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
