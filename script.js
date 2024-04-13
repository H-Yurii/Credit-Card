let button = document.querySelector('.form__button')
let userName = document.querySelector('.userName')
let password = document.querySelector('.password')
let email = document.querySelector('.email')
let phoneNumber = document.querySelector('.phoneNumber')
let imageOne = document.querySelector('.form__first')
let imageTwo = document.querySelector('.form__second')
let imageThree = document.querySelector('.form__third')
let imageFour = document.querySelector('.form__fourth')
let modalOne = document.querySelector('.form-label__warning1')
let modalTwo = document.querySelector('.form-label__warning2')
let modalThree = document.querySelector('.form-label__warning3')
let modalFour = document.querySelector('.form-label__warning4')
let modalFive = document.querySelector('.form-button__congratulation')
button.addEventListener('click', function () {
    let userNameValue = userName.value
    let passwordValue = password.value
    let emailValue = email.value
    let phoneNumberValue = phoneNumber.value
    userName.classList.remove('warning')
    password.classList.remove('warning')
    email.classList.remove('warning')
    phoneNumber.classList.remove('warning')
    modalOne.classList.remove('chnage-modal-1')
    modalTwo.classList.remove('chnage-modal-2')
    modalThree.classList.remove('chnage-modal-3')
    modalFour.classList.remove('chnage-modal-4')
    modalFive.classList.remove('chnage-modal-5')
    if (userNameValue.length < 2) {
        userName.classList.add('warning')
        modalOne.classList.add('chnage-modal-1')
        return
    }
    else if (passwordValue.length < 6 ){
        password.classList.add('warning')
        modalTwo.classList.add('chnage-modal-2')
        return
    }
    else if (emailValue.length < 6 || !emailValue.includes('@gmail.com')) {
        email.classList.add('warning')
        modalThree.classList.add('chnage-modal-3')
        return
    }
    else if (phoneNumberValue.length !== 13 || !phoneNumberValue.includes('+380')) {
        phoneNumber.classList.add('warning')
        modalFour.classList.add('chnage-modal-4')
        return
    }

    else {
        phoneNumber.classList.remove('warning')
        email.classList.remove('warning')
        password.classList.remove('warning')
        userName.classList.remove('warning')
        imageOne.classList.add('chnage-one')
        imageTwo.classList.add('chnage-two')
        imageThree.classList.add('chnage-three')
        imageFour.classList.add('chnage-four')
        modalOne.classList.remove('chnage-modal-1')
        modalTwo.classList.remove('chnage-modal-2')
        modalThree.classList.remove('chnage-modal-3')
        modalFour.classList.remove('chnage-modal-4')
        modalFive.classList.add('chnage-modal-5')
        setTimeout(function () {
            window.location.href = './creditCard.html';
        }, 3000);
    }
})
