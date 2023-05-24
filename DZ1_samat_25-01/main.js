// Задание 1

let grade = Number(prompt('Оцените наш сервис от 1 до 10.'))

if (grade >= 5 && grade <= 10) {
    alert('Спасибо за высокую оценку.')
} else if (grade < 5 && grade >= 1) {
    alert('Мы работаем над улучшением сервиса.')
} else {
    alert('Ошибка! Нужно написать число от 1 до 10.')
}

switch (grade) {
    case 1:
        alert('Мы работаем над улучшением сервиса.')
        break
    case 2:
        alert('Мы работаем над улучшением сервиса.')
        break
    case 3:
        alert('Мы работаем над улучшением сервиса.')
        break
    case 4:
        alert('Мы работаем над улучшением сервиса.')
        break
    case 5:
        alert('Спасибо за высокую оценку.')
        break
    case 6:
        alert('Спасибо за высокую оценку.')
        break
    case 7:
        alert('Спасибо за высокую оценку.')
        break
    case 8:
        alert('Спасибо за высокую оценку.')
        break
    case 9:
        alert('Спасибо за высокую оценку.')
        break
    case 10:
        alert('Спасибо за высокую оценку.')
        break
    default:
        alert('Ошибка! Нужно написать число от 1 до 10.')
        break
}


// Задание 2
let weekRus = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

let weekEng = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

let week = prompt('Выберите язык RUS или ENG и введите.')

if (week === 'RUS' || week === 'rus') {
    console.log(weekRus)
} else if (week === 'ENG' || week === 'eng') {
    console.log(weekEng)
} else {
    alert('Ошибка! Введите RUS или ENG.')
}
