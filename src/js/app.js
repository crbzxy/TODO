console.log("hola");
//selectores
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// escuchadores de eventos
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", eliminarTarea);
// funciones

function addTodo(event) {
  // prevenir que inicie por defaul el form
  event.preventDefault();
  console.log("Se creo una tarea");
  //todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("tarea");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__item");
  todoDiv.appendChild(newTodo);
  //crear el boton de completado
  const completado = document.createElement("button");
  completado.innerHTML = '<i class="fas fa-check"></i>';
  completado.classList.add("btn-completado");
  todoDiv.appendChild(completado);
  // crear el boton de eliminado
  const eliminado = document.createElement("button");
  eliminado.innerHTML = '<i class="fas fa-trash"></i>';
  eliminado.classList.add("btn-eliminado");
  todoDiv.appendChild(eliminado);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}


function eliminarTarea(e){
  const item = e.target;
  //Eliminar la tarea
if (item.classList[0] === "btn-eliminado") {
  const tarea = item.parentElement;

// animacion
tarea.classList.add("salida");
tarea.addEventListener ('transitionend', function (){
  tarea.remove();
})
console.log("tarea eliminada")
}

if (item.classList[0]=== "btn-completado"){
  const tarea = item.parentElement;
  tarea.classList.toggle("completado");
  console.log("tarea completada")
}

}