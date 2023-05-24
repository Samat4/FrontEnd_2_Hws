// 1) Написать функцию (любой из видов пройденных на уроке) - которая принимает аргумент и
// возвращает его тип данных в консоли.
//     Пример:
// getDataType(false) => boolean
// getDataType('hello world!') => string
// getDataType(42) => number

let bool = false
let sTr = 'string'
let num = 42
let getType = (el) => {
  console.log(typeof el)
}
getType(num)

// 2) Написать простой калькулятор используя функцию, который может выполнять основные
// математические вычисления такие как: сложение, вычитание, умножение, деление.
//     Функция должна принимать 3 параметра:
//     1. первое число
// 2. математическое действие: +, -, /, *
// 3. второе число
// Пример:
//     calculate(40, '+', 2) => 42
// calculate(52, '-', 12) => 40
// calculate(30, '/', 3) => 3
// calculate(23, '*', 10) => 230


let fistNum = Number(prompt('Введите первое число.'))
let action = prompt('Введите действие. "+" "-" "*" "/"')
let secondNum = Number(prompt('Введите второе число'))
let result

let calculate = (a, b, c) => {
  if (b === '+') {
    result = a + c
    alert(fistNum + ' + ' + secondNum + ' = ' + result)
    } else if (b === '-') {
      result = a - c
      alert(fistNum + ' - ' + secondNum + ' = ' + result)
    } else if (b === '*') {
      result = a * c
      alert(fistNum + ' * ' + secondNum + ' = ' + result)
    } else if (c === 0 && b === '/') {
      alert('Нельзя делить на ноль!')
    } else if (b === '/') {
      result = a / c
      alert(fistNum + ' / ' + secondNum + ' = ' + result)
    } else {
      alert('Ошибка! Введите только числа и действие!')
    }
}
calculate(fistNum, action, secondNum)

// 3) Написать функцию, которая ищет позицию (индекс) элемента в массиве.
// (бинарный поиск) - функция должна принимать 2 аргумента:
//     1. Элемент который вы собираетесь искать внутри массива.
// 2. Сам массив внутри которого вы собираетесь искать элемент.
//     Пример:
// var myArray = [2, 1, 4, 5, 7]
// getPositionArrayElement( 5, myArray ) => 3

const myArray = [9, 2, 1, 4, 5, 6, 7, 8]
const target = 5

const binarySearch = (el, arr) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let center = Math.floor((start + end) / 2)
    let current = arr[center]
    if (current === el) {
      return center
    } else if (el < current) {
      end = center - 1
    } else {
      start = center + 1
    }
  }
  return -1;
}

const index = binarySearch(target, myArray)
console.log(index)