import "./style.css";

const hmabergerElement = document.querySelector("[data-hamberger]");
hmabergerElement.addEventListener("click", hambergerClick);
const dropDownMenuElement = document.querySelector(
  "[data-dropdown-menu]"
).classList;
function hambergerClick() {
  dropDownMenuElement.toggle("open");
}

const gridButton_list = document.querySelectorAll(".grid-item");
gridButton_list.forEach((item) => {
  console.log(item);
  const gridButton_Element = item.addEventListener("click", () => {
    item.classList.toggle("grid_boder");
  });
});
