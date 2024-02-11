let gds__item=document.createElement("li")
gds__item.classList.add("gds__item")
const gds__spawn=document.querySelector(".gds__list")
let gds__name=document.createElement("h1")
let gds__title=document.createTextNode("Tayga")
gds__name.appendChild(gds__title)
let gds__image=document.createElement("img")
gds__image.src="img/20231027212438_1.jpg"
gds__image.classList.add("tayga__img")
let gds__remove=document.createElement("button")
let gds__btn=document.createTextNode("удалить товар")
gds__remove.appendChild(gds__btn)
gds__remove.setAttribute("onclick","del()")
let first__item=document.currentSelectorAll(".gds__item")[0]
function spawning() {
    gds__spawn.appendChild(gds__item)
    gds__item.appendChild(gds__name)
    gds__item.appendChild(gds__image)
    gds__item.appendChild(gds__remove)
    first__item.classList.add("none")
}
function del() {
    gds__remove.parentNode.remove();
}