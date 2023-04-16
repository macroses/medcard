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

const btnFull = document.querySelector('.btn-mode')
const medcard = document.querySelector('.medcard')

btnFull.addEventListener('click', () => {
  medcard.classList.toggle('full-mode')
})


const searchBtn = document.querySelector('.search__icon_toggle')
const searchBlock = document.querySelector('.medcard_search')
const searchInput = document.querySelector('.medcard_search__input')

searchBtn.addEventListener('click', () => {
  searchBlock.classList.add('active')
  searchInput.focus()
})

searchInput.addEventListener('blur', () => searchBlock.classList.remove('active'))