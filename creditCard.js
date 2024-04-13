let cardName = document.querySelector('.cardName')
let textCard = document.querySelector('.textCard')
let costumerName = document.querySelector('.costumerName')
let textName = document.querySelector('.textName')
let iBAN = document.querySelector('.iBAN')
let textIban = document.querySelector('.textIban')
let bLZ = document.querySelector('.bLZ')
let textBlz = document.querySelector('.textBlz')
let kontoNr = document.querySelector('.kontoNr')
let textNr = document.querySelector('.textNr')
let date = document.querySelector('.date')
let textDate = document.querySelector('.textDate')
cardName.addEventListener('input', function () {
    let cardNameValue = cardName.value
    textCard.textContent = cardNameValue
})
costumerName.addEventListener('input', function () {
    let costumerNameValue = costumerName.value
    textName.textContent = costumerNameValue
})
iBAN.addEventListener('input', function () {
    let iBANValue = iBAN.value
    textIban.textContent = iBANValue
})
bLZ.addEventListener('input', function () {
    let bLZValue  = bLZ.value
    textBlz.textContent = bLZValue
})
kontoNr.addEventListener('input', function () {
    let kontoNrValue = kontoNr.value
    textNr.textContent = kontoNrValue
})
date.addEventListener('input', function () {
    let dateValue = date.value
    textDate.textContent = dateValue
})