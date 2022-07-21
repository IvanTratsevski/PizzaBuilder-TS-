import {typesOfComponents} from "./constants.js";
class addableComponent{
    pathToImg;
    constructor(price, name, type,imgName,classOfElement = null, pathToImg = null){
        this.price = price;
        this.name = name;
        this.type = type;
        this.imgName = imgName;
    }
};
const addableComponents = [
    new addableComponent(4, "BASE 1", typesOfComponents[0],"1"),
    new addableComponent(6, "BASE 2", typesOfComponents[0],"2"),
    new addableComponent(4, "BASE 3", typesOfComponents[0],"3"),
    new addableComponent(5, "BASE 4", typesOfComponents[0],"4"),
    new addableComponent(8, "BACON",typesOfComponents[1],"bacons"),
    new addableComponent(3, "MASLINS",typesOfComponents[1],"maslins"),
    new addableComponent(5, "MUSHROOMS",typesOfComponents[1],"mushrooms"),
    new addableComponent(3, "OLIVES",typesOfComponents[1],"olives"),
    new addableComponent(7, "PINEAPPLES",typesOfComponents[2],"pineapples"),
    new addableComponent(11, "SHRIMPS",typesOfComponents[2],"shrimps"),
    new addableComponent(5, "SOUSAGES",typesOfComponents[2],"sousages"),
    new addableComponent(2, "TOMATOS",typesOfComponents[2],"tomatos"),
    new addableComponent(7, "SAUCE 1",typesOfComponents[3],"1"),
    new addableComponent(6, "SAUCE 2",typesOfComponents[3],"2"),
    new addableComponent(9, "SAUCE 3",typesOfComponents[3],"3"),
    new addableComponent(10, "SAUCE 4",typesOfComponents[3],"4"),
];
export {addableComponents};