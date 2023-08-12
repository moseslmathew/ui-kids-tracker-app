import "./style.css";

const hmabergerElement = document.querySelector("[data-hamberger]");
const dropDownMenuElement = document.querySelector("[data-dropdown-menu]").classList;
hmabergerElement.addEventListener("click", hambergerClick);

function hambergerClick() {
    dropDownMenuElement.toggle('open');
}
