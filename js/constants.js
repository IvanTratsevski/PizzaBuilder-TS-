const mainWrapper = [...document.getElementsByClassName("wrapper")][0];
const pizzaWrapper = [...document.getElementsByClassName("pizzaWrapper")][0];
const pizzaPlate = [...document.getElementsByClassName("pizzaImage")][0];
const fieldForAddingBase = [...document.getElementsByClassName("base")][0];
const fieldForAddingIngridients1 = [...document.getElementsByClassName("ingridients1")][0];
const fieldForAddingIngridients2 = [...document.getElementsByClassName("ingridients2")][0];
const fieldForAddingSauce = [...document.getElementsByClassName("sauce")][0];
const fieldForRemoving = [...document.getElementsByClassName("ingridientsToRemove")][0];
const fieldOfPrice = [...document.getElementsByClassName("price")][0];
const orederBtn = [...document.getElementsByClassName("orderButton")][0];
// const typesOfComponents: string[] = ["base","ingridient1","ingridient2","sauce"];
// const pathesToImgs: string[] = ["img/bases/base_","img/components/","img/souses/souce_"];
var typesOfComponents;
(function (typesOfComponents) {
    typesOfComponents["base"] = "base";
    typesOfComponents["ingridient1"] = "ingridient1";
    typesOfComponents["ingridient2"] = "ingridient2";
    typesOfComponents["sauce"] = "sauce";
})(typesOfComponents || (typesOfComponents = {}));
var basicPathesToImgs;
(function (basicPathesToImgs) {
    basicPathesToImgs["bases"] = "img/bases/base_";
    basicPathesToImgs["ingridients"] = "img/components/";
    basicPathesToImgs["sauces"] = "img/souses/souce_";
})(basicPathesToImgs || (basicPathesToImgs = {}));
var baseImg;
(function (baseImg) {
    baseImg["b1"] = "1";
    baseImg["b2"] = "2";
    baseImg["b3"] = "3";
    baseImg["b4"] = "4";
})(baseImg || (baseImg = {}));
var ingridientsImg;
(function (ingridientsImg) {
    ingridientsImg["bacons"] = "bacons";
    ingridientsImg["maslins"] = "maslins";
    ingridientsImg["mushrooms"] = "mushrooms";
    ingridientsImg["olives"] = "olives";
    ingridientsImg["pineapples"] = "pineapples";
    ingridientsImg["shrimps"] = "shrimps";
    ingridientsImg["sousages"] = "sousages";
    ingridientsImg["tomatos"] = "tomatos";
})(ingridientsImg || (ingridientsImg = {}));
var sauceImg;
(function (sauceImg) {
    sauceImg["s1"] = "1";
    sauceImg["s2"] = "2";
    sauceImg["s3"] = "3";
    sauceImg["s4"] = "4";
})(sauceImg || (sauceImg = {}));
var classesOfDOMElements;
(function (classesOfDOMElements) {
    classesOfDOMElements["activeBtn"] = "activeBtn";
    classesOfDOMElements["activeDiv"] = "activeDiv";
    classesOfDOMElements["base"] = "base";
    classesOfDOMElements["ingridient1"] = "ingridient1";
    classesOfDOMElements["ingridient2"] = "ingridient2";
    classesOfDOMElements["sauce"] = "sauce";
})(classesOfDOMElements || (classesOfDOMElements = {}));
export { mainWrapper, fieldForAddingBase, fieldForAddingIngridients1, fieldForAddingIngridients2, fieldForAddingSauce, fieldOfPrice, typesOfComponents, baseImg, ingridientsImg, sauceImg, basicPathesToImgs, classesOfDOMElements, pizzaWrapper, pizzaPlate, fieldForRemoving, orederBtn };
