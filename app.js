const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  let brand = 'all';
  const search = document.querySelector('#search');
  const apply = () => {
    let count = 0;
    document.querySelectorAll('.card').forEach(card => {
      card.hidden = !(brand === 'all' || card.dataset.brand === brand) || !card.dataset.search.toLowerCase().includes(search.value.toLowerCase().trim());
      if (!card.hidden) count++;
    });
    document.querySelector('#result-status').textContent = count ? `Материалов: ${count}` : 'По вашему запросу материалов нет. Попробуйте другой запрос.';
  };
  filters.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    brand = button.dataset.filter;
    filters.querySelectorAll('button').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    apply();
  }));
  search.addEventListener('input', apply);
  apply();
}
