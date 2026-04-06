class Popup {
  constructor({ popUpSelector }) {
    this._popUpElement = document.querySelector(popUpSelector);
    this._popUpCloseBtn = this._popUpElement.querySelector(".popup__close");
  }

  open() {
    this._popUpElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popUpElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popUpCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popUpElement.addEventListener("mouseDown", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}

export default Popup;
