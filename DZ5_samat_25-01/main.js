const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (!input.value.trim()) {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')

        const buttonsBlock = document.createElement('div')
        const deleteBtn = document.createElement('button')
        const editBtn = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.innerHTML = input.value

        buttonsBlock.setAttribute('class', 'buttons_block')
        deleteBtn.setAttribute('class', 'delete')
        editBtn.setAttribute('class', 'edit')

        deleteBtn.innerText = 'Delete'
        editBtn.innerText = 'Edit'

        buttonsBlock.append(deleteBtn)
        buttonsBlock.append(editBtn)

        div.append(text)
        div.append(buttonsBlock)
        todoList.prepend(div)

        const deleteTodo = () => {
            div.remove()
        }
        deleteBtn.onclick = () => deleteTodo()

        const editTodo = () => {
            const newText = prompt('', text.innerHTML)
            if (newText.trim() !== '') {
                return text.innerHTML = newText
            } else {
                alert('Error')
            }
        }
        editBtn.onclick = () => editTodo()
    }
    return input.value = ''
}

createButton.onclick = () => createTodo()
window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') createTodo()
})