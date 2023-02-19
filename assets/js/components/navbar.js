function navbar() {
  const navbarMenu = document.querySelector('.navbar__menu')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar__toggle')) {
      navbarMenu.classList.toggle('show--menu')
    }

    if (e.target.closest('.navbar__close')) {
      navbarMenu.classList.remove('show--menu')
    }
  })
}

export default navbar