let cardNumber = document.querySelector('.cardNumber')
let customerName = document.querySelector('.customerName')
let expEnd = document.querySelector('.expEnd')
let textCardNumber = document.querySelector('.textCardNumber')
let textCustomerName = document.querySelector('.textCustomerName')
let textExpEnd = document.querySelector('.textExpEnd')
let button = document.querySelector('.buttonCardNumber')

cardNumber.addEventListener('input', function () {
    let cardNumberValue = cardNumber.value
    textCardNumber.textContent = cardNumberValue
})
customerName.addEventListener('input', function () {
    let customerNameValue = customerName.value
    textCustomerName.textContent = customerNameValue
})
expEnd.addEventListener('input', function () {
    let expEndValue = expEnd.value
    textExpEnd.textContent = expEndValue
})
button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * ( 9999 - 1000 ) + 1000)
    let randomTwo = Math.floor(Math.random() * ( 9999 - 1000 ) + 1000)
    let randomThree = Math.floor(Math.random() * ( 9999 - 1000 ) + 1000)
    let randomFour = Math.floor(Math.random() * (9999 - 1000) + 1000)
    let randomSum = `${random} ${randomTwo} ${randomThree} ${randomFour}`
    textCardNumber.textContent = randomSum
})