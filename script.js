const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCountVal = 0
let uncheckedCountVal = 0

function newTodo() {
  //update item count
  itemCountVal +=1
  uncheckedCountVal+=1

  //update display
  itemCountSpan.textContent=itemCountVal
  uncheckedCountSpan.textContent=uncheckedCountVal

  //creates a list item with every click
  let task = document.createElement("li")
  task.id = "li-"+itemCountVal

  //creates the text and appends it to the list item
  let taskText = document.createTextNode("Task " + itemCountVal)
  let taskCheck = document.create
  task.appendChild(taskText)

  //creates the checkbox and appends it to the list itemCountVal
  let taskCheckbox = document.createElement("input")
  taskCheckbox.type = "checkbox"
  taskCheckbox.id="box-"+itemCountVal
  taskCheckbox.onchange=seeChecked
  task.appendChild(taskCheckbox)

  //appends the list item to the list
  list.appendChild(task)
}

//if the box is clicked determine its state and then update the uncheckedCountVal
function seeChecked(){
  if(this.checked){
    uncheckedCountVal-=1
  }
  else{
    uncheckedCountVal+=1
  }
  uncheckedCountSpan.textContent=uncheckedCountVal
}
