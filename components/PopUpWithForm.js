import PopUp from "./Popup.js";

class PopUpWithForm extends PopUp {
  constructor({ popUpSelector, handleFormSubmit }) {
    super({ popUpSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popUpForm = this._popUpElement.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popUpForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  _getInputValues() {
    this.inputList = this._popUpForm.querySelectorAll(".popup__input");
    const inputValues = {};
    this.inputList.forEach((item) => {
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }
}
export default PopUpWithForm;
