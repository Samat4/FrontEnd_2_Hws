// 1
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const result = document.querySelector('.result')

increment.onclick = () => {
  result.innerText = Number(result.innerText) + 1
  result.style.color = 'green'
}

decrement.onclick = () => {
  if (result.innerText != 0) {
    result.innerText = Number(result.innerText) - 1
    result.style.color = 'red'
  }
}


// 2

const btn = document.querySelector('.click')
const txt = document.querySelector('.txt')
let text
btn.addEventListener('click',() => {
  text = prompt()
  if (text !== '') {
    txt.innerText = text
  } else {
    alert('Введите что либо')
    txt.innerText = ''
  }
} )


// 3

const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const redText = document.querySelector('.red-text')
const yellowText = document.querySelector('.yellow-text')
const greenText = document.querySelector('.green-text')

const color = prompt('Введите цвет. "Красный" или "Желтый" или "Зеленый"')

if (color === 'красный' || color === 'Красный') {
  red.style.backgroundColor = 'red'
  redText.style.display = "flex"
} else if (color === 'желтый' || color === 'Желтый') {
  yellow.style.backgroundColor = 'yellow'
  yellowText.style.display = "flex"
} else if (color === 'зеленый' || color === 'Зеленый') {
  green.style.backgroundColor = 'green'
  greenText.style.display = "flex"
} else {
  alert('Ошибка! Введите цвет. "Красный" или "Желтый" или "Зеленый"')
}
