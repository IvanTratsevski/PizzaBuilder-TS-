import { classesOfDOMElements, fieldOfPrice} from "./constants.js";
import { showImageOfComponent, disableMaxOfComponents, addComponentToList, isOrderAble, showUnorderablePopUp, showOrderedPopUp } from "./utilits.js";
function addIngridientClick(addedIngrArr, ingridient, ingrDomElemBtn, ingrDomElem) {
    showImageOfComponent(ingridient);
    addedIngrArr.push(ingridient);
    fieldOfPrice.value = `${+fieldOfPrice.value + ingridient.price}`;
    ingrDomElemBtn.disabled = true;
    ingrDomElemBtn.classList.add(classesOfDOMElements.activeBtn);
    ingrDomElem.classList.add(classesOfDOMElements.activeDiv);
    addComponentToList(addedIngrArr, ingridient);
    disableMaxOfComponents();
}
function removeIngridientClick(addedIngrArr, ingridient, ingrDomElem) {
    fieldOfPrice.value = `${+fieldOfPrice.value - ingridient.price}`;
    addedIngrArr.splice(addedIngrArr.indexOf(ingridient), 1);
    ingrDomElem.remove();
}
function closePopUpClick(popUp) {
    popUp.remove();
}
function orderPizzaClick(addedIngrArr) {
    if (isOrderAble(addedIngrArr)) {
        showOrderedPopUp(addedIngrArr);
    }
    else {
        showUnorderablePopUp();
    }
}
export { addIngridientClick, removeIngridientClick, orderPizzaClick, closePopUpClick };
