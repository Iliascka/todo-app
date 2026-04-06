import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constant.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopUpWithForm from "../components/PopUpWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");

function toDoCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function toDoDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

function toDoAddTotal() {
  todoCounter.updateTotal(true);
}

function toDoDeleteTotal() {
  todoCounter.updateTotal(false);
}

const addTodoPopup = new PopUpWithForm({
  popUpSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const id = uuidv4();
    const values = { name, date, id };
    section.addItem(generateTodo(values));
    toDoAddTotal();

    newTodoValidator.resetValidation();
    addTodoPopup.close();
  },
});
addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

const generateTodo = (data) => {
  const todo = new Todo(
    data,
    "#todo-template",
    toDoCheck,
    toDoDelete,
    toDoDeleteTotal,
  );
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

section.renderItems();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
