import { typesOfComponents, baseImg, ingridientsImg, sauceImg, basicPathesToImgs, classesOfDOMElements } from "./constants.js";
class addableComponent {
    price;
    name;
    imgName;
    constructor(price, name, imgName) {
        this.price = price;
        this.name = name;
        this.imgName = imgName;
    }
}
;
class baseComponent extends addableComponent {
    type = typesOfComponents.base;
    classOfDOMElement = classesOfDOMElements.base;
    fullPathToImg = basicPathesToImgs.bases + this.imgName + ".png";
}
class ingridient1Component extends addableComponent {
    type = typesOfComponents.ingridient1;
    classOfDOMElement = classesOfDOMElements.ingridient1;
    fullPathToImg = basicPathesToImgs.ingridients + this.imgName + ".png";
}
class ingridient2Component extends addableComponent {
    type = typesOfComponents.ingridient2;
    classOfDOMElement = classesOfDOMElements.ingridient2;
    fullPathToImg = basicPathesToImgs.ingridients + this.imgName + ".png";
}
class sauceComponent extends addableComponent {
    type = typesOfComponents.sauce;
    classOfDOMElement = classesOfDOMElements.sauce;
    fullPathToImg = basicPathesToImgs.sauces + this.imgName + ".png";
}
const addableComponents = [
    new baseComponent(5, "BASE 1", baseImg.b1),
    new baseComponent(5, "BASE 2", baseImg.b2),
    new baseComponent(5, "BASE 3", baseImg.b3),
    new baseComponent(5, "BASE 4", baseImg.b4),
    new ingridient1Component(7, "BACON", ingridientsImg.bacons),
    new ingridient1Component(7, "MASLINS", ingridientsImg.maslins),
    new ingridient1Component(7, "MUSHROOMS", ingridientsImg.mushrooms),
    new ingridient1Component(7, "OLIVES", ingridientsImg.olives),
    new ingridient2Component(10, "PINEAPPLES", ingridientsImg.pineapples),
    new ingridient2Component(10, "SHRIMPS", ingridientsImg.shrimps),
    new ingridient2Component(10, "SOUSAGES", ingridientsImg.sousages),
    new ingridient2Component(10, "TOMATOS", ingridientsImg.tomatos),
    new sauceComponent(15, "SAUCE 1", sauceImg.s1),
    new sauceComponent(15, "SAUCE 2", sauceImg.s2),
    new sauceComponent(15, "SAUCE 3", sauceImg.s3),
    new sauceComponent(15, "SAUCE 4", sauceImg.s4),
];
export { addableComponents, addableComponent };
