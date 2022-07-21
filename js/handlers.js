import { fieldOfPrice } from "./constants.js";
import { showImageOfComponent, isMaxOfCurrentComponents,addComponentToList, isOrderAble } from "./utilits.js";
function addIngridientClick(addedIngrArr,ingridient,ingrDomElemBtn,ingrDomElem){
    showImageOfComponent(ingridient);
    addedIngrArr.push(ingridient);
    fieldOfPrice.value = +fieldOfPrice.value + ingridient.price;
    ingrDomElemBtn.disabled=true;
    ingrDomElemBtn.classList.add("active");
    ingrDomElem.classList.add("activeComp");
    addComponentToList(addedIngrArr,ingridient,);
    isMaxOfCurrentComponents();
}
function removeIngridientClick(addedIngrArr,ingridient,ingrDomElem){
    fieldOfPrice.value = +fieldOfPrice.value - ingridient.price;
    addedIngrArr.splice(addedIngrArr.indexOf(ingridient),1);
    ingrDomElem.remove();
}
function orderPizzaClick(addedIngrArr){
    if(isOrderAble(addedIngrArr)){
        console.log(addedIngrArr);
    } else {
        alert("There is no base");
    }

}
export {addIngridientClick,removeIngridientClick,orderPizzaClick};