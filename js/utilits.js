import { fieldForAddingBase,fieldForAddingIngridients1,fieldForAddingIngridients2,fieldForAddingSauce, typesOfComponents, pathesToImgs,pizzaWrapper, fieldForRemoving} from "./constants.js";
import { addIngridientClick, removeIngridientClick } from "./handlers.js";
function showImageOfComponent(ingridientElement){
    const ingrImg = createImgOfIngridient(ingridientElement);
    pizzaWrapper.prepend(ingrImg);
}
function removeImageOfComponent(component){
    document.getElementById(`img${component.name}`);
}
function createImgOfIngridient(ingridient){
    if(ingridient.type === typesOfComponents[0]){
        ingridient.pathToImg = pathesToImgs[0] + ingridient.imgName + ".png";
        ingridient.classOfElement = "base";
    } else if(ingridient.type === typesOfComponents[1] || ingridient.type === typesOfComponents[2]){
        ingridient.pathToImg = pathesToImgs[1] + ingridient.imgName + ".png";
        ingridient.classOfElement = "ingridient";
    } else if(ingridient.type === typesOfComponents[3]){
        ingridient.pathToImg = pathesToImgs[2] + ingridient.imgName + ".png";
        ingridient.classOfElement = "sauce";
    }
    const ingridientImg = document.createElement("img");
    ingridientImg.className = `imageOfIngridient + ${ingridient.classOfElement}`
    ingridientImg.id = `img${ingridient.name}`;
    ingridientImg.src = ingridient.pathToImg;
    return ingridientImg;
}

function renderAbstractComponent(addedIngrArr,addableComponent){
    const ingridient = document.createElement("div");
    ingridient.className = "addedIngridient";
    ingridient.id = addableComponent.name;
    const ingridientInfo = document.createElement("p");
    ingridientInfo.textContent = `${addableComponent.price}$ ${addableComponent.name}`;
    const ingridientAddButton = document.createElement("button");
    ingridientAddButton.className = "addIngridientButton";
    ingridientAddButton.textContent = "ADD"
    ingridientAddButton.addEventListener("click",(e) => {
        e.preventDefault();
        addIngridientClick(addedIngrArr,addableComponent,ingridientAddButton,ingridient);
    })
    ingridient.append(ingridientInfo);
    ingridient.append(ingridientAddButton);
    return ingridient;
}

function renderBaseComponent(addedIngrArr,addableComponent){
    const ingridient = renderAbstractComponent(addedIngrArr,addableComponent);
    ingridient.classList.add("baseComp");
    fieldForAddingBase.append(ingridient);
}

function renderIngridient1Component(addedIngrArr,addableComponent){
    const ingridient = renderAbstractComponent(addedIngrArr,addableComponent);
    ingridient.classList.add("ingr1Comp");
    fieldForAddingIngridients1.append(ingridient);
}

function renderIngridient2Component(addedIngrArr,addableComponent){
    const ingridient = renderAbstractComponent(addedIngrArr,addableComponent);
    ingridient.classList.add("ingr2Comp");
    fieldForAddingIngridients2.append(ingridient);
}

function renderSauceComponent(addedIngrArr,addableComponent){
    const ingridient = renderAbstractComponent(addedIngrArr,addableComponent);
    ingridient.classList.add("sauceComp");
    fieldForAddingSauce.append(ingridient);
}

function renderAnyComponent(addedIngrArr,addableComponent){
    if(addableComponent.type === typesOfComponents[0]){
        renderBaseComponent(addedIngrArr,addableComponent);
    } else if(addableComponent.type === typesOfComponents[1]){
        renderIngridient1Component(addedIngrArr,addableComponent);
    } else if(addableComponent.type === typesOfComponents[2]){
        renderIngridient2Component(addedIngrArr,addableComponent);
    } else if(addableComponent.type === typesOfComponents[3]){
        renderSauceComponent(addedIngrArr,addableComponent);
    }        
}

function renderAddableComponents(addedIngrArr,addableComponents){
    addableComponents.forEach(element => {
        renderAnyComponent(addedIngrArr,element);
    });
}
function isMaxOfCurrentComponents(){
    const amountOfBases = [...document.getElementsByClassName("baseComp")];
    const amountOfIngr1 = [...document.getElementsByClassName("ingr1Comp")];
    const amountOfIngr2 = [...document.getElementsByClassName("ingr2Comp")];
    const amountOfSauce = [...document.getElementsByClassName("sauceComp")];
    if(amountOfBases.filter(element => element.className.includes("activeComp")).length === 1){
        amountOfBases.forEach(element => {
            if(!(element.className.includes("activeComp"))){
                disableComponent(element);
            }
        })
    }
    if(amountOfIngr1.filter(element => element.className.includes("activeComp")).length === 2){
        amountOfIngr1.forEach(element => {
            if(!(element.className.includes("activeComp"))){
                disableComponent(element);
            }
        })
    }
    if(amountOfIngr2.filter(element => element.className.includes("activeComp")).length === 2){
        amountOfIngr2.forEach(element => {
            if(!(element.className.includes("activeComp"))){
                disableComponent(element);
            }
        })
    }
    if(amountOfSauce.filter(element => element.className.includes("activeComp")).length === 1){
        amountOfSauce.forEach(element => {
            if(!(element.className.includes("activeComp"))){
                disableComponent(element);
            }
        })
    }
}
function disableComponent(ingrDomElem){
    ingrDomElem.lastChild.disabled = true;
    ingrDomElem.classList.add("unactive");
}
function enableComponent(ingrDomElem){
    ingrDomElem.lastChild.disabled = false;
    [...ingrDomElem.getElementsByTagName("button")][0].classList.remove("active");
    ingrDomElem.classList.remove("unactive");
}
function enableComponents(ingridient,component){
    if(component.type === typesOfComponents[0]){
        [...document.getElementsByClassName("baseComp")].forEach((element) => {
            enableComponent(element);
            document.getElementById(`${component.name}`).classList.remove("activeComp");
        });
    } else if(component.type === typesOfComponents[1]){
        [...document.getElementsByClassName("ingr1Comp")].forEach((element) => {
            if((ingridient.className).includes(element.id) || !(element.className.includes("activeComp"))){
                enableComponent(element);
                document.getElementById(`${component.name}`).classList.remove("activeComp");
            }
        });
    } else if(component.type === typesOfComponents[2]){
        [...document.getElementsByClassName("ingr2Comp")].forEach((element) => {
            if((ingridient.className).includes(element.id) || !(element.className.includes("activeComp"))){
                enableComponent(element);
                document.getElementById(`${component.name}`).classList.remove("activeComp");
            }
        });
    } else if(component.type === typesOfComponents[3]){
        [...document.getElementsByClassName("sauceComp")].forEach((element) => {
            enableComponent(element);
            document.getElementById(`${component.name}`).classList.remove("activeComp");
        });
    }
}
function addComponentToList(addedIngrArr,component){
    const ingridient = document.createElement("div");
    ingridient.className = `addedIngridient ${component.name}`;
    const ingridientInfo = document.createElement("p");
    ingridientInfo.textContent = `${component.price}$ ${component.name}`;
    const ingridientAddButton = document.createElement("button");
    ingridientAddButton.className = "removeIngridientButton";
    ingridientAddButton.textContent = "REMOVE"
    ingridientAddButton.addEventListener("click",(e) => {
        e.preventDefault();
        removeIngridientClick(addedIngrArr,component,ingridient);
        enableComponents(ingridient,component);
        document.getElementById(`img${component.name}`).remove();
    })
    ingridient.append(ingridientInfo);
    ingridient.append(ingridientAddButton);
    fieldForRemoving.append(ingridient);
}
function isOrderAble(addedIngrArr){
    return addedIngrArr.find(element => element.classOfElement === "base");
}
export{renderAddableComponents,showImageOfComponent,isMaxOfCurrentComponents, disableComponent,addComponentToList,removeImageOfComponent,isOrderAble};