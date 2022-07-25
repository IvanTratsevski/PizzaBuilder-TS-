import { mainWrapper, fieldForAddingBase, fieldForAddingIngridients1, fieldForAddingIngridients2, fieldForAddingSauce, typesOfComponents, pizzaWrapper, fieldForRemoving, classesOfDOMElements } from "./constants.js";
import { addIngridientClick, removeIngridientClick, closePopUpClick } from "./handlers.js";
function createAbstractComponent(addableComponent, addedIngrArr) {
    const ingridient = document.createElement("div");
    ingridient.className = "addedIngridient";
    ingridient.id = addableComponent.name;
    const ingridientInfo = document.createElement("p");
    ingridientInfo.textContent = `${addableComponent.price}$ ${addableComponent.name}`;
    const ingridientAddButton = document.createElement("button");
    ingridientAddButton.className = "addIngridientButton";
    ingridientAddButton.textContent = "ADD";
    if (addedIngrArr !== undefined) {
        ingridientAddButton.addEventListener("click", (e) => {
            e.preventDefault();
            addIngridientClick(addedIngrArr, addableComponent, ingridientAddButton, ingridient);
        });
    }
    ingridient.append(ingridientInfo);
    ingridient.append(ingridientAddButton);
    return ingridient;
}
function createBaseComponent(addableComponent, addedIngrArr) {
    const ingridient = createAbstractComponent(addableComponent, addedIngrArr);
    ingridient.classList.add("baseComp");
    fieldForAddingBase.append(ingridient);
}
function createIngridient1Component(addableComponent, addedIngrArr) {
    const ingridient = createAbstractComponent(addableComponent, addedIngrArr);
    ingridient.classList.add("ingr1Comp");
    fieldForAddingIngridients1.append(ingridient);
}
function createIngridient2Component(addableComponent, addedIngrArr) {
    const ingridient = createAbstractComponent(addableComponent, addedIngrArr);
    ingridient.classList.add("ingr2Comp");
    fieldForAddingIngridients2.append(ingridient);
}
function createSauceComponent(addableComponent, addedIngrArr) {
    const ingridient = createAbstractComponent(addableComponent, addedIngrArr);
    ingridient.classList.add("sauceComp");
    fieldForAddingSauce.append(ingridient);
}
function renderAnyComponent(addableComponent, addedIngrArr) {
    const addComp = addableComponent;
    const ingrArr = addedIngrArr;
    if (addableComponent.type === typesOfComponents.base) {
        createBaseComponent(addComp, ingrArr);
    }
    else if (addComp.type === typesOfComponents.ingridient1) {
        createIngridient1Component(addComp, ingrArr);
    }
    else if (addComp.type === typesOfComponents.ingridient2) {
        createIngridient2Component(addComp, ingrArr);
    }
    else if (addComp.type === typesOfComponents.sauce) {
        createSauceComponent(addComp, ingrArr);
    }
}
function renderAddableComponents(addableComponents, addedIngrArr) {
    addableComponents.forEach(element => {
        renderAnyComponent(element, addedIngrArr);
    });
}
function createImgOfIngridient(ingridient) {
    const ingridientImg = document.createElement("img");
    ingridientImg.className = `imageOfIngridient + ${ingridient.classOfDOMElement}`;
    ingridientImg.id = `img${ingridient.name}`;
    ingridientImg.src = ingridient.fullPathToImg;
    return ingridientImg;
}
function showImageOfComponent(ingridientElement) {
    const ingrImg = createImgOfIngridient(ingridientElement);
    pizzaWrapper.prepend(ingrImg);
}
function removeImageOfComponent(component) {
    document.getElementById(`img${component.name}`);
}
function disableComponent(ingrDomElem) {
    [...ingrDomElem.getElementsByTagName("button")][0].disabled = true;
    ingrDomElem.classList.add("unactive");
}
function disableMaxOfComponents() {
    const baseDOMDivs = [...document.getElementsByClassName("baseComp")];
    const ingr1DOMDivs = [...document.getElementsByClassName("ingr1Comp")];
    const ingr2DOMDivs = [...document.getElementsByClassName("ingr2Comp")];
    const sauceDOMDivs = [...document.getElementsByClassName("sauceComp")];
    if (baseDOMDivs.filter(element => element.className.includes(classesOfDOMElements.activeDiv)).length === 1) {
        baseDOMDivs.forEach(element => {
            if (!(element.className.includes(classesOfDOMElements.activeDiv))) {
                disableComponent(element);
            }
        });
    }
    if (ingr1DOMDivs.filter(element => element.className.includes(classesOfDOMElements.activeDiv)).length === 2) {
        ingr1DOMDivs.forEach(element => {
            if (!(element.className.includes(classesOfDOMElements.activeDiv))) {
                disableComponent(element);
            }
        });
    }
    if (ingr2DOMDivs.filter(element => element.className.includes(classesOfDOMElements.activeDiv)).length === 2) {
        ingr2DOMDivs.forEach(element => {
            if (!(element.className.includes(classesOfDOMElements.activeDiv))) {
                disableComponent(element);
            }
        });
    }
    if (sauceDOMDivs.filter(element => element.className.includes(classesOfDOMElements.activeDiv)).length === 1) {
        sauceDOMDivs.forEach(element => {
            if (!(element.className.includes(classesOfDOMElements.activeDiv))) {
                disableComponent(element);
            }
        });
    }
}
function enableComponent(ingrDomElem, component) {
    [...ingrDomElem.getElementsByTagName("button")][0].disabled = false;
    [...ingrDomElem.getElementsByTagName("button")][0].classList.remove(classesOfDOMElements.activeBtn);
    ingrDomElem.classList.remove("unactive");
    document.getElementById(`${component.name}`).classList.remove(classesOfDOMElements.activeDiv);
}
function enableComponents(ingridient, component) {
    if (component.type === typesOfComponents.base) {
        [...document.getElementsByClassName("baseComp")].forEach((element) => {
            enableComponent(element, component);
        });
    }
    else if (component.type === typesOfComponents.ingridient1) {
        [...document.getElementsByClassName("ingr1Comp")].forEach((element) => {
            if ((ingridient.className).includes(element.id) || !(element.className.includes(classesOfDOMElements.activeDiv))) {
                enableComponent(element, component);
            }
        });
    }
    else if (component.type === typesOfComponents.ingridient2) {
        [...document.getElementsByClassName("ingr2Comp")].forEach((element) => {
            if ((ingridient.className).includes(element.id) || !(element.className.includes(classesOfDOMElements.activeDiv))) {
                enableComponent(element, component);
            }
        });
    }
    else if (component.type === typesOfComponents.sauce) {
        [...document.getElementsByClassName("sauceComp")].forEach((element) => {
            enableComponent(element, component);
        });
    }
}
function addComponentToList(addedIngrArr, component) {
    const ingridient = document.createElement("div");
    ingridient.className = `addedIngridient ${component.name}`;
    const ingridientInfo = document.createElement("p");
    ingridientInfo.textContent = `${component.price}$ ${component.name}`;
    const ingridientAddButton = document.createElement("button");
    ingridientAddButton.className = "removeIngridientButton";
    ingridientAddButton.textContent = "REMOVE";
    ingridientAddButton.addEventListener("click", (e) => {
        e.preventDefault();
        removeIngridientClick(addedIngrArr, component, ingridient);
        enableComponents(ingridient, component);
        document.getElementById(`img${component.name}`).remove();
    });
    ingridient.append(ingridientInfo);
    ingridient.append(ingridientAddButton);
    fieldForRemoving.append(ingridient);
}
function isOrderAble(addedIngrArr) {
    return addedIngrArr.find(element => element.classOfDOMElement === classesOfDOMElements.base) &&
        addedIngrArr.find(element => element.classOfDOMElement === classesOfDOMElements.ingridient1) &&
        addedIngrArr.find(element => element.classOfDOMElement === classesOfDOMElements.ingridient2) &&
        addedIngrArr.find(element => element.classOfDOMElement === classesOfDOMElements.sauce);
}
function createOrderedIngridient(ingridient) {
    const ingrInfo = document.createElement("p");
    ingrInfo.textContent = `${ingridient.price}$ ${ingridient.name}`;
    return ingrInfo;
}
function showOrderedIngridients(addedIngrArr, containerForIngr) {
    addedIngrArr.forEach(element => {
        containerForIngr.append(createOrderedIngridient(element));
    });
}
function showUnorderablePopUp() {
    const popUpBg = document.createElement("div");
    const popUp = document.createElement("div");
    const popUpText = document.createElement("p");
    const popUpBtn = document.createElement("button");
    popUpText.textContent = "PLEASE SELECT AT LEAST 1 OF EACH INGRIDIENT";
    popUpBtn.textContent = "CLOSE";
    popUpBtn.className = "popUpBtn close";
    popUp.className = "popUp unorderable";
    popUpBg.className = "popUpBg";
    popUpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closePopUpClick(popUpBg);
    });
    popUp.append(popUpText, popUpBtn);
    popUpBg.append(popUp);
    mainWrapper.append(popUpBg);
}
function showOrderedPopUp(addedIngrArr) {
    const popUpBg = document.createElement("div");
    const popUp = document.createElement("div");
    const popUpText = document.createElement("p");
    const popUpIngridents = document.createElement("div");
    const popUpBtn = document.createElement("button");
    popUpText.textContent = "YOUR INGRIDIENTS";
    popUpBtn.textContent = "CLOSE";
    popUpBtn.className = "popUpBtn close";
    popUp.className = "popUp ordered";
    popUpBg.className = "popUpBg";
    showOrderedIngridients(addedIngrArr, popUpIngridents);
    popUpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closePopUpClick(popUpBg);
    });
    popUp.append(popUpText, popUpIngridents, popUpBtn);
    popUpBg.append(popUp);
    mainWrapper.append(popUpBg);
}
export { renderAddableComponents, showImageOfComponent, disableMaxOfComponents, disableComponent, addComponentToList, removeImageOfComponent, isOrderAble, showUnorderablePopUp, showOrderedPopUp };
