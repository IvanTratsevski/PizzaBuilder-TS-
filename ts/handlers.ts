import { classesOfDOMElements, fieldOfPrice } from "./constants.js";
import { addableComponent } from "./domElements.js";
import { showImageOfComponent, disableMaxOfComponents,addComponentToList, isOrderAble, showUnorderablePopUp
,showOrderedPopUp } from "./utilits.js";
function addIngridientClick(
    addedIngrArr: addableComponent[],
    ingridient: addableComponent,
    ingrDomElemBtn: HTMLButtonElement,
    ingrDomElem: HTMLDivElement
    ){
    showImageOfComponent(ingridient);
    addedIngrArr.push(ingridient);
    fieldOfPrice.value = `${+fieldOfPrice.value + ingridient.price}`;
    ingrDomElemBtn.disabled=true;
    ingrDomElemBtn.classList.add(classesOfDOMElements.activeBtn);
    ingrDomElem.classList.add(classesOfDOMElements.activeDiv);
    addComponentToList(addedIngrArr,ingridient);
    disableMaxOfComponents();}
function removeIngridientClick(
    addedIngrArr: addableComponent[],
    ingridient: addableComponent,
    ingrDomElem:HTMLDivElement
    ){
    fieldOfPrice.value = `${+fieldOfPrice.value - ingridient.price}`;
    addedIngrArr.splice(addedIngrArr.indexOf(ingridient),1);
    ingrDomElem.remove();
}
function closePopUpClick(popUp: HTMLDivElement){
    popUp.remove();
}
function orderPizzaClick(addedIngrArr: addableComponent[]){
    if(isOrderAble(addedIngrArr)){
        showOrderedPopUp(addedIngrArr);
    } else {
        showUnorderablePopUp();
    }

}
export {addIngridientClick,removeIngridientClick,orderPizzaClick,closePopUpClick};