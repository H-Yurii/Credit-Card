/* let button = document.querySelector('.form__button')
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
        modalOne.classList.remove('chnage-modal-1')
        modalTwo.classList.remove('chnage-modal-2')
        modalThree.classList.remove('chnage-modal-3')
        modalFour.classList.remove('chnage-modal-4')
        modalFive.classList.add('chnage-modal-5')
        setTimeout(function () {
            window.location.href = './creditCard.html';
        }, 3000);
    }
}) */

let userName = document.querySelector('.userName')
let password = document.querySelector('.password')
let email = document.querySelector('.email')
let phoneNumber = document.querySelector('.phoneNumber')
let button = document.querySelector('.button')
let modalOne = document.querySelector('.modalOne')
let explanationOne = document.querySelector('.explanationOne')
let modalTwo = document.querySelector('.modalTwo')
let explanationTwo = document.querySelector('.explanationTwo')
let specialCharRegex = /[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/
let upperCase = /[QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM]/
let letters = /[qwertzuiopüasdfghjklöäyxcvbnmQWERTZUIOPÜASDFGHJKLÖÄYXCVBNM]/
let modalThree = document.querySelector('.modalThree')
let explanationThree = document.querySelector('.explanationThree')
let modalFour = document.querySelector('.modalFour')
let explanationFour = document.querySelector('.explanationFour')

button.addEventListener('click', function () {
    let userNameValue = userName.value
    let passwordValue = password.value
    let emailValue = email.value
    let phoneNumberValue = phoneNumber.value
    userName.classList.remove('warning')
    modalOne.classList.remove('change')
    explanationOne.classList.remove('notes')
    password.classList.remove('warning')
    modalTwo.classList.remove('change')
    explanationTwo.classList.remove('notes')
    email.classList.remove('warning')
    modalThree.classList.remove('change')
    explanationThree.classList.remove('notes')
    phoneNumber.classList.remove('warning')
    modalFour.classList.remove('change')
    explanationFour.classList.remove('notes')
    if (userNameValue.length < 5) {
        userName.classList.add('warning')
        modalOne.classList.add('change')
        explanationOne.classList.add('notes')

        return
    }

    else if (passwordValue.length < 10 || !specialCharRegex.test(passwordValue) || !upperCase.test(passwordValue)) {
        password.classList.add('warning')
        modalTwo.classList.add('change')
        explanationTwo.classList.add('notes')

        return
    }

    else if (!emailValue.includes('@gmail.com')) {
        email.classList.add('warning')
        modalThree.classList.add('change')
        explanationThree.classList.add('notes')

        return
    }

    else if (!phoneNumberValue.includes('+')) {
        phoneNumber.classList.add('warning')
        modalFour.classList.add('change')
        explanationFour.classList.add('notes')

        return
    }

    else {
        userName.classList.add('correct')
        password.classList.add('correct')
        email.classList.add('correct')
        phoneNumber.classList.add('correct')
        setTimeout(function () {
            window.location.href = './creditCard.html'
        }, 3000);
    }
})
