let buttonMenu = document.querySelector('.header__button-menu')
let listMenu = document.querySelector('.header__menu-block')

buttonMenu.addEventListener('click', function () {
    if (buttonMenu.className === 'header__button-menu')
        buttonMenu.classList.add('active')
    else {
        buttonMenu.classList.remove('active')
    }
    if (listMenu.className === 'header__menu-block')
        listMenu.classList.add('change')
    else {
        listMenu.classList.remove('change')
    }
}) 