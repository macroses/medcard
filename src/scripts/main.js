const btns = document.querySelectorAll('.medcard__collapse_btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const collapseWrap = btn.closest('.collapse__wrap');
    const collapseEl = collapseWrap.querySelector('.collapse');

    if (collapseEl) {
      collapseEl.classList.toggle('active');
      btn.classList.toggle('active');
    }
  });
});

