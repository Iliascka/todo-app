/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/index.css"
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://se_project_todo-app/./pages/index.css?\n}");

/***/ },

/***/ "./components/FormValidator.js"
/*!*************************************!*\
  !*** ./components/FormValidator.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormValidator {\r\n  constructor(settings, form) {\r\n    this._settings = settings;\r\n    this._inputSelector = settings.inputSelector;\r\n    this._submitButtonSelector = settings.submitButtonSelector;\r\n    this._errorClass = settings.errorClass;\r\n    this._inputErrorClass = settings.inputErrorClass;\r\n    this._inactiveButtonClass = settings.inactiveButtonClass;\r\n    this._form = form;\r\n  }\r\n\r\n  _showInputError(inputElement, errorMessage) {\r\n    const errorElementId = `#${inputElement.id}-error`;\r\n    const errorElement = this._form.querySelector(errorElementId);\r\n    inputElement.classList.add(this._inputErrorClass);\r\n    errorElement.textContent = errorMessage;\r\n    errorElement.classList.add(this._errorClass);\r\n  }\r\n\r\n  _hideInputError(inputElement) {\r\n    const errorElementId = `#${inputElement.id}-error`;\r\n    const errorElement = this._form.querySelector(errorElementId);\r\n    inputElement.classList.remove(this._inputErrorClass);\r\n    errorElement.classList.remove(this._errorClass);\r\n    errorElement.textContent = \"\";\r\n  }\r\n\r\n  _checkInputValidity(inputElement) {\r\n    if (!inputElement.validity.valid) {\r\n      this._showInputError(inputElement, inputElement.validationMessage);\r\n    } else {\r\n      this._hideInputError(inputElement);\r\n    }\r\n  }\r\n\r\n  _hasInvalidInput() {\r\n    return this._inputList.some((inputElement) => {\r\n      return !inputElement.validity.valid;\r\n    });\r\n  }\r\n\r\n  _toggleButtonState() {\r\n    if (this._hasInvalidInput()) {\r\n      this._buttonElement.classList.add(this._inactiveButtonClass);\r\n      this._buttonElement.disabled = true;\r\n    } else {\r\n      this._buttonElement.classList.remove(this._inactiveButtonClass);\r\n      this._buttonElement.disabled = false;\r\n    }\r\n  }\r\n\r\n  _setEventListeners() {\r\n    this._inputList = Array.from(\r\n      this._form.querySelectorAll(this._inputSelector),\r\n    );\r\n    this._buttonElement = this._form.querySelector(this._submitButtonSelector);\r\n    this._toggleButtonState();\r\n\r\n    this._inputList.forEach((inputElement) => {\r\n      inputElement.addEventListener(\"input\", () => {\r\n        this._checkInputValidity(inputElement);\r\n        this._toggleButtonState();\r\n      });\r\n    });\r\n  }\r\n\r\n  enableValidation() {\r\n    this._form.addEventListener(\"submit\", (evt) => {\r\n      evt.preventDefault();\r\n    });\r\n\r\n    this._setEventListeners();\r\n  }\r\n\r\n  resetValidation() {\r\n    this._form.reset();\r\n    this._inputList.forEach((inputElement) => {\r\n      this._hideInputError(inputElement);\r\n    });\r\n    this._toggleButtonState();\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/FormValidator.js?\n}");

/***/ },

/***/ "./components/Popup.js"
/*!*****************************!*\
  !*** ./components/Popup.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Popup {\r\n  constructor({ popupSelector }) {\r\n    this._popupElement = document.querySelector(popupSelector);\r\n    this._popupCloseBtn = this._popupElement.querySelector(\".popup__close\");\r\n  }\r\n\r\n  open() {\r\n    this._popupElement.classList.add(\"popup_visible\");\r\n    document.addEventListener(\"keyup\", this._handleEscapeClose);\r\n  }\r\n\r\n  close() {\r\n    this._popupElement.classList.remove(\"popup_visible\");\r\n    document.removeEventListener(\"keyup\", this._handleEscapeClose);\r\n  }\r\n\r\n  setEventListeners() {\r\n    this._popupCloseBtn.addEventListener(\"click\", () => {\r\n      this.close();\r\n    });\r\n\r\n    this._popupElement.addEventListener(\"mousedown\", (evt) => {\r\n      if (\r\n        evt.target.classList.contains(\"popup\") ||\r\n        evt.target.classList.contains(\"popup__close\")\r\n      ) {\r\n        this.close();\r\n      }\r\n    });\r\n  }\r\n\r\n  _handleEscapeClose = (evt) => {\r\n    if (evt.key === \"Escape\") {\r\n      this.close();\r\n    }\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/Popup.js?\n}");

/***/ },

/***/ "./components/PopupWithForm.js"
/*!*************************************!*\
  !*** ./components/PopupWithForm.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./components/Popup.js\");\n\r\n\r\nclass PopupWithForm extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor({ popupSelector, handleFormSubmit }) {\r\n    super({ popupSelector });\r\n    this._handleFormSubmit = handleFormSubmit;\r\n    this._popupForm = this._popupElement.querySelector(\".popup__form\");\r\n  }\r\n\r\n  setEventListeners() {\r\n    super.setEventListeners();\r\n    this._popupForm.addEventListener(\"submit\", (evt) => {\r\n      evt.preventDefault();\r\n      this._handleFormSubmit(this._getInputValues());\r\n    });\r\n  }\r\n\r\n  _getInputValues() {\r\n    this.inputList = this._popupForm.querySelectorAll(\".popup__input\");\r\n    const inputValues = {};\r\n    this.inputList.forEach((item) => {\r\n      inputValues[item.name] = item.value;\r\n    });\r\n    return inputValues;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/PopupWithForm.js?\n}");

/***/ },

/***/ "./components/Section.js"
/*!*******************************!*\
  !*** ./components/Section.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Section {\r\n  constructor({ items, renderer, containerSelector }) {\r\n    this._items = items;\r\n    this._renderer = renderer;\r\n    this._container = document.querySelector(containerSelector);\r\n  }\r\n\r\n  renderItems() {\r\n    this._items.forEach((item) => {\r\n      this._renderer(item);\r\n    });\r\n  }\r\n\r\n  addItem(element) {\r\n    this._container.append(element);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/Section.js?\n}");

/***/ },

/***/ "./components/Todo.js"
/*!****************************!*\
  !*** ./components/Todo.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n  constructor(\r\n    data,\r\n    selector,\r\n    handleTodoCheck,\r\n    handleTodoDelete,\r\n    decrementTotal,\r\n  ) {\r\n    this._data = data;\r\n    this._templateElement = document.querySelector(selector);\r\n    this._handleTodoCheck = handleTodoCheck;\r\n    this._handleTodoDelete = handleTodoDelete;\r\n    this._decrementTotal = decrementTotal;\r\n  }\r\n\r\n  _setEventListeners() {\r\n    this._todoCheckboxEl.addEventListener(\"change\", () => {\r\n      this._data.completed = !this._data.completed;\r\n      this._handleTodoCheck(this._data.completed);\r\n    });\r\n\r\n    this._todoDeleteBtn.addEventListener(\"click\", () => {\r\n      this._handleTodoDelete(this._data.completed);\r\n      this._decrementTotal();\r\n      this._todoElement.remove();\r\n    });\r\n  }\r\n\r\n  _setDate() {\r\n    const dueDate = new Date(this._data.date);\r\n    if (!isNaN(dueDate)) {\r\n      this._todoDate.textContent = `Due: ${dueDate.toLocaleString(\"en-US\", {\r\n        year: \"numeric\",\r\n        month: \"short\",\r\n        day: \"numeric\",\r\n      })}`;\r\n    }\r\n  }\r\n\r\n  _generateCheckBoxEl() {\r\n    this._todoCheckboxEl = this._todoElement.querySelector(\".todo__completed\");\r\n    this._todoLabel = this._todoElement.querySelector(\".todo__label\");\r\n    this._todoCheckboxEl.checked = this._data.completed;\r\n    this._todoCheckboxEl.id = `todo-${this._data.id}`;\r\n    this._todoLabel.setAttribute(\"for\", `todo-${this._data.id}`);\r\n  }\r\n\r\n  getView() {\r\n    this._todoElement = this._templateElement.content\r\n      .querySelector(\".todo\")\r\n      .cloneNode(true);\r\n\r\n    const todoNameEl = this._todoElement.querySelector(\".todo__name\");\r\n    this._todoDate = this._todoElement.querySelector(\".todo__date\");\r\n    this._todoDeleteBtn = this._todoElement.querySelector(\".todo__delete-btn\");\r\n    todoNameEl.textContent = this._data.name;\r\n    this._generateCheckBoxEl();\r\n    this._setEventListeners();\r\n    this._setDate();\r\n\r\n    return this._todoElement;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/Todo.js?\n}");

/***/ },

/***/ "./components/TodoCounter.js"
/*!***********************************!*\
  !*** ./components/TodoCounter.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoCounter {\r\n  constructor(todos, selector) {\r\n    this._element = document.querySelector(selector);\r\n    this._completed = todos.filter((todo) => todo.completed).length;\r\n    this._total = todos.length;\r\n    this._updateText();\r\n  }\r\n\r\n  updateCompleted = (increment) => {\r\n    this._completed += increment ? 1 : -1;\r\n    this._updateText();\r\n  };\r\n\r\n  updateTotal = (increment) => {\r\n    this._total += increment ? 1 : -1;\r\n    this._updateText();\r\n  };\r\n\r\n  _updateText() {\r\n    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoCounter);\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./components/TodoCounter.js?\n}");

/***/ },

/***/ "./node_modules/uuid/dist/regex.js"
/*!*****************************************!*\
  !*** ./node_modules/uuid/dist/regex.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n\n//# sourceURL=webpack://se_project_todo-app/./node_modules/uuid/dist/regex.js?\n}");

/***/ },

/***/ "./node_modules/uuid/dist/rng.js"
/*!***************************************!*\
  !*** ./node_modules/uuid/dist/rng.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n    return crypto.getRandomValues(rnds8);\n}\n\n\n//# sourceURL=webpack://se_project_todo-app/./node_modules/uuid/dist/rng.js?\n}");

/***/ },

/***/ "./node_modules/uuid/dist/stringify.js"
/*!*********************************************!*\
  !*** ./node_modules/uuid/dist/stringify.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/validate.js\");\n\nconst byteToHex = [];\nfor (let i = 0; i < 256; ++i) {\n    byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n    return (byteToHex[arr[offset + 0]] +\n        byteToHex[arr[offset + 1]] +\n        byteToHex[arr[offset + 2]] +\n        byteToHex[arr[offset + 3]] +\n        '-' +\n        byteToHex[arr[offset + 4]] +\n        byteToHex[arr[offset + 5]] +\n        '-' +\n        byteToHex[arr[offset + 6]] +\n        byteToHex[arr[offset + 7]] +\n        '-' +\n        byteToHex[arr[offset + 8]] +\n        byteToHex[arr[offset + 9]] +\n        '-' +\n        byteToHex[arr[offset + 10]] +\n        byteToHex[arr[offset + 11]] +\n        byteToHex[arr[offset + 12]] +\n        byteToHex[arr[offset + 13]] +\n        byteToHex[arr[offset + 14]] +\n        byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n    const uuid = unsafeStringify(arr, offset);\n    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n        throw TypeError('Stringified UUID is invalid');\n    }\n    return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n\n//# sourceURL=webpack://se_project_todo-app/./node_modules/uuid/dist/stringify.js?\n}");

/***/ },

/***/ "./node_modules/uuid/dist/v4.js"
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v4.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/stringify.js\");\n\n\nfunction v4(options, buf, offset) {\n    if (!buf && !options && crypto.randomUUID) {\n        return crypto.randomUUID();\n    }\n    return _v4(options, buf, offset);\n}\nfunction _v4(options, buf, offset) {\n    options = options || {};\n    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (rnds.length < 16) {\n        throw new Error('Random bytes length must be >= 16');\n    }\n    rnds[6] = (rnds[6] & 0x0f) | 0x40;\n    rnds[8] = (rnds[8] & 0x3f) | 0x80;\n    if (buf) {\n        offset = offset || 0;\n        if (offset < 0 || offset + 16 > buf.length) {\n            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);\n        }\n        for (let i = 0; i < 16; ++i) {\n            buf[offset + i] = rnds[i];\n        }\n        return buf;\n    }\n    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n\n//# sourceURL=webpack://se_project_todo-app/./node_modules/uuid/dist/v4.js?\n}");

/***/ },

/***/ "./node_modules/uuid/dist/validate.js"
/*!********************************************!*\
  !*** ./node_modules/uuid/dist/validate.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/regex.js\");\n\nfunction validate(uuid) {\n    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n\n//# sourceURL=webpack://se_project_todo-app/./node_modules/uuid/dist/validate.js?\n}");

/***/ },

/***/ "./pages/index.js"
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/v4.js\");\n/* harmony import */ var _utils_constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant.js */ \"./utils/constant.js\");\n/* harmony import */ var _components_Todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Todo.js */ \"./components/Todo.js\");\n/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormValidator.js */ \"./components/FormValidator.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ \"./components/Section.js\");\n/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ \"./components/PopupWithForm.js\");\n/* harmony import */ var _components_TodoCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TodoCounter.js */ \"./components/TodoCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst todoCounter = new _components_TodoCounter_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](_utils_constant_js__WEBPACK_IMPORTED_MODULE_2__.initialTodos, \".counter__text\");\r\n\r\nconst addTodoButton = document.querySelector(\".button_action_add\");\r\nconst addTodoPopupEl = document.querySelector(\"#add-todo-popup\");\r\nconst addTodoForm = addTodoPopupEl.querySelector(\".popup__form\");\r\n\r\nfunction handleTodoCheck(completed) {\r\n  todoCounter.updateCompleted(completed);\r\n}\r\n\r\nfunction handleTodoDelete(completed) {\r\n  if (completed) {\r\n    todoCounter.updateCompleted(false);\r\n  }\r\n}\r\n\r\nfunction incrementTotal() {\r\n  todoCounter.updateTotal(true);\r\n}\r\n\r\nfunction decrementTotal() {\r\n  todoCounter.updateTotal(false);\r\n}\r\n\r\nconst renderTodo = (item) => {\r\n  const todoElement = generateTodo(item);\r\n  section.addItem(todoElement);\r\n};\r\n\r\nconst addTodoPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\r\n  popupSelector: \"#add-todo-popup\",\r\n  handleFormSubmit: (inputValues) => {\r\n    const name = inputValues.name;\r\n    const dateInput = inputValues.date;\r\n\r\n    const date = new Date(dateInput);\r\n    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());\r\n    const id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const values = { name, date, id };\r\n    renderTodo(values);\r\n    incrementTotal();\r\n\r\n    newTodoValidator.resetValidation();\r\n    addTodoPopup.close();\r\n  },\r\n});\r\naddTodoPopup.setEventListeners();\r\n\r\nconst section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\r\n  items: _utils_constant_js__WEBPACK_IMPORTED_MODULE_2__.initialTodos,\r\n  renderer: (item) => {\r\n    renderTodo(item);\r\n  },\r\n  containerSelector: \".todos__list\",\r\n});\r\n\r\nconst generateTodo = (data) => {\r\n  const todo = new _components_Todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n    data,\r\n    \"#todo-template\",\r\n    handleTodoCheck,\r\n    handleTodoDelete,\r\n    decrementTotal,\r\n  );\r\n  const todoElement = todo.getView();\r\n  return todoElement;\r\n};\r\n\r\naddTodoButton.addEventListener(\"click\", () => {\r\n  addTodoPopup.open();\r\n});\r\n\r\nsection.renderItems();\r\n\r\nconst newTodoValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_utils_constant_js__WEBPACK_IMPORTED_MODULE_2__.validationConfig, addTodoForm);\r\nnewTodoValidator.enableValidation();\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./pages/index.js?\n}");

/***/ },

/***/ "./utils/constant.js"
/*!***************************!*\
  !*** ./utils/constant.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialTodos: () => (/* binding */ initialTodos),\n/* harmony export */   validationConfig: () => (/* binding */ validationConfig)\n/* harmony export */ });\nconst initialTodos = [\r\n  {\r\n    id: \"7cec7373-681b-49d9-b065-021d61a69d03\",\r\n    name: \"Read the sprint's theory\",\r\n    completed: true,\r\n    date: new Date(),\r\n  },\r\n  {\r\n    id: \"a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba\",\r\n    name: \"Read project instructions\",\r\n    completed: false,\r\n    date: new Date(),\r\n  },\r\n  {\r\n    id: \"aa486839-63ab-437f-b8a2-29ab217dff4f\",\r\n    name: \"Complete project\",\r\n    completed: false,\r\n    date: new Date(),\r\n  },\r\n];\r\n\r\nconst validationConfig = {\r\n  formSelector: \".popup__form\",\r\n  inputSelector: \".popup__input\",\r\n  submitButtonSelector: \".popup__button\",\r\n  errorClass: \"popup__error_visible\",\r\n  inputErrorClass: \"popup__input_type_error\",\r\n  inactiveButtonClass: \"button_disabled\",\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://se_project_todo-app/./utils/constant.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./pages/index.js");
/******/ 	
/******/ })()
;