// 1. Дан массив числами, например: [10, 20, 30, 50, 235, 3000, 5000439857].
// Выведите в консоль только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const arr = [10, 20, 30, 50, 235, 15, 355, 543, 1477]

for (i = 0; i < arr.length; i++) {
  let firstElement = String(arr[i])[0]
  if ( firstElement === '1' || firstElement === '2' || firstElement === '5') {
    console.log(arr[i])
  }
}

// // 2. При помощи цикла выводить цифры в убывающем порядке от 20 до 0 

for (let i = 20; i >= 0; i--) {
  console.log(i)
}

// 3. Написать светофор используя условную конструкцию (if else или switch case).  
// В зависимости от введённого цвета в promt() выводить alert(). 
// Если ввели 'красный' то выводить 'стоп' и так далее по цветам светофора. 
// Если ввели что либо другое то выводить alert() с подсказкой что надо вводить цвета 
// (используйте объект для выполнения этого ДЗ в объекте должны быть ключи со значениями цветов, 
//   которые сравниваются в условных конструкциях)

const colors = {
  red: 'красный',
  upRed: 'Красный',
  yellow: 'желтый',
  upYellow: 'Желтый',
  green: 'зеленый',
  upGreen: 'Зеленый'
}

const action = {
  stop: 'Стоп!',
  getReady: 'Приготовтесь!',
  go: 'Проходите!'
}

let color = prompt('Введите цвет. "красный" или "желтый" или "зеленый".')

if ( color === colors.red || color === colors.upRed) {
  alert(action.stop)
} else if (color === colors.yellow || color === colors.upYellow) {
  alert(action.getReady)
} else if (color === colors.green || color === colors.upGreen) {
  alert(action.go)
} else {
  alert('Ошибка, введите цвет! "Красный" или "Желтый" или "Зеленый".')
}

switch (color) {
  case colors.red || colors.upRed:
    alert(action.stop)
    break
  case colors.yellow || colors.upYellow:
    alert(action.getReady)
    break
  case colors.green || colors.upGreen:
    alert(action.go)
    break
  default:
    alert('Ошибка, введите цвет! "Красный" или "Желтый" или "Зеленый".')
}

// 4. Создать пустой массив и добавить туда числа от 0 до 10 включительно

const array = []

for(let i = 0; i <= 10; i++) {
  array.push(i)
}

console.log(array);