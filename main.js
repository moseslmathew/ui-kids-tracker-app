import "./style.css";

const hmabergerElement = document.querySelector("[data-hamberger]");
hmabergerElement.addEventListener("click", hambergerClick);
const dropDownMenuElement = document.querySelector("[data-dropdown-menu]").classList;
function hambergerClick() {
    dropDownMenuElement.toggle('open');
}


const gridButton_Two_Element=document.querySelector("[data-two]")
gridButton_Two_Element.addEventListener("click",gridButton_Two_Click)
function gridButton_Two_Click() {
    gridButton_Two_Element.classList.toggle("grid_boder")
}


const gridButton_list=document.querySelectorAll(".grid-item");
gridButton_list.forEach((item) => {
    console.log(item.dataset.one )
    gridButton_Element=
    item.addEventListener("click",() => {})
})

