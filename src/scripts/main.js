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

const dropdownInputs = document.querySelectorAll('.dropdown__input');

dropdownInputs.forEach(dropdownInput => {
  dropdownInput.addEventListener('focus', function () {
    const parent = this.closest('.dropdown')
    const dropdownList = parent.querySelector('.dropdown__list_wrap')
    dropdownList.classList.add('active')
  })

  dropdownInput.addEventListener('blur', function () {
    const parent = this.closest('.dropdown')
    const dropdownList = parent.querySelector('.dropdown__list_wrap')
    dropdownList.classList.remove('active')
  })
})

