import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  _getInputValues() {
    this.inputList = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {};
    this.inputList.forEach((item) => {
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }
}
export default PopupWithForm;
