const input = document.querySelector('#inp')
const btn = document.querySelector('.btn')
const div = document.querySelector('.two')

const reverseFunc = () => {
    const str = String(input.value)
    const newArr = str.split('')
    newArr.forEach((item, i) => {
        newArr[i] = item.toUpperCase()
    })
    newArr.reverse()
    div.innerHTML = newArr.join('')
}

btn.addEventListener('click', () => {
    reverseFunc()
})

window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') reverseFunc()
})
