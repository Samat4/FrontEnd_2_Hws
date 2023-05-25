// 1) Создать класс Cars с парметрами model, color, wheels (количество колёс)
// Реализовать метод start() который отображает в консоли 'Машина заведена'
// Наследоваться от Cars и создать ещё 3 класса (На ваше усмотрение) и
// добавить в каждую по одному дополнительному параметру.
// В итоге создать 3 машины с теми классами которые у вас получились.

class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start () {
        return console.log('Машина заведена')
    }
}

class Honda extends Cars {
    constructor(options) {
        super(options);
        this.carsNumber = options.carsNumber
    }
    showNumber () {
        return console.log(`Номер машины ${this.carsNumber}`)
    }
}

const fit = new Honda({
    model: 'Fit',
    color: 'White',
    wheels: 4,
    carsNumber: 'B2477CD'
})

console.log(fit)
fit.start()
fit.showNumber()

class Lada extends Cars {
    constructor(options) {
        super(options);
        this.country = options.country
    }
}

const vesta = new Lada({
    model: 'Vesta',
    color: 'Black',
    wheels: 4,
    country: "Russia"
})

console.log(vesta)
vesta.start()

class Bmw extends Cars {
    constructor(options) {
        super(options);
        this.maxSpeed = options.maxSpeed
    }
}

const x7 = new Bmw({
    model: 'X7',
    color: 'Red',
    wheels: 4,
    maxSpeed: '227 km/h'
})

console.log(x7)
x7.start()



// 2) Сверстать светофор из ДЗ4 и реализовать его через классы.
// Логика остаётся такой как в ДЗ4. Проработать все баги и мелкие возможные
// недочёты и сделать ДЗ в двух вариантах (if else и switch case)

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    red () {
        return  this.$element.style.backgroundColor = 'red'
    }
    redText () {
        return this.$element.style.display = "flex"
    }
    yellow () {
        return this.$element.style.backgroundColor = 'yellow'
    }
    yellowText () {
        return this.$element.style.display = "flex"
    }
    green () {
        return this.$element.style.backgroundColor = 'green'
    }
    greenText () {
        this.$element.style.display = "flex"
    }
}

class Block1 extends Component {
    constructor(options) {
        super(options.selector);
    }
}

const red = new Block1({
    selector: '.red'
})
const yellow = new Block1({
    selector: '.yellow'
})
const green = new Block1({
    selector: '.green'
})
const redText = new Block1({
    selector: '.red-text'
})
const yellowText = new Block1({
    selector: '.yellow-text'
})
const greenText = new Block1({
    selector: '.green-text'
})

const color = prompt('Введите цвет. "Красный" или "Желтый" или "Зеленый"').trim()
//
// if (color === 'красный' || color === 'Красный') {
//     red.red()
//     redText.redText()
// } else if (color === 'желтый' || color === 'Желтый') {
//     yellow.yellow()
//     yellowText.yellowText()
// } else if (color === 'зеленый' || color === 'Зеленый') {
//     green.green()
//     greenText.greenText()
// } else {
//     alert('Ошибка! Введите цвет. "Красный" или "Желтый" или "Зеленый"')
// }

switch (color) {
    case 'красный' || 'Красный':
       red.red()
       redText.redText()
       break
    case 'желтый' || 'Желтый':
        yellow.yellow()
        yellowText.yellowText()
        break
    case 'зеленый' || 'Зеленый':
        green.green()
        greenText.greenText()
        break
    default:
        alert('Ошибка, введите цвет! "Красный" или "Желтый" или "Зеленый".')
}