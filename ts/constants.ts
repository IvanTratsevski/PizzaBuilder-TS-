const mainWrapper = [...document.getElementsByClassName("wrapper")][0] as HTMLDivElement;
const pizzaWrapper = [...document.getElementsByClassName("pizzaWrapper")][0] as HTMLDivElement;
const pizzaPlate = [...document.getElementsByClassName("pizzaImage")][0] as HTMLImageElement;
const fieldForAddingBase = [...document.getElementsByClassName("base")][0] as HTMLDivElement;
const fieldForAddingIngridients1 = [...document.getElementsByClassName("ingridients1")][0] as HTMLDivElement;
const fieldForAddingIngridients2 = [...document.getElementsByClassName("ingridients2")][0] as HTMLDivElement;
const fieldForAddingSauce = [...document.getElementsByClassName("sauce")][0] as HTMLDivElement;
const fieldForRemoving = [...document.getElementsByClassName("ingridientsToRemove")][0] as HTMLDivElement;
const fieldOfPrice = [...document.getElementsByClassName("price")][0] as HTMLInputElement;
const orederBtn = [...document.getElementsByClassName("orderButton")][0] as HTMLButtonElement;
// const typesOfComponents: string[] = ["base","ingridient1","ingridient2","sauce"];
// const pathesToImgs: string[] = ["img/bases/base_","img/components/","img/souses/souce_"];

enum typesOfComponents{
    base = "base",
    ingridient1 = "ingridient1",
    ingridient2 = "ingridient2",
    sauce = "sauce",
}
enum basicPathesToImgs{
    bases = "img/bases/base_",
    ingridients = "img/components/",
    sauces = "img/souses/souce_",
}
enum baseImg{
    b1 = "1",
    b2 = "2",
    b3 = "3",
    b4 = "4",
}
enum ingridientsImg{
    bacons = "bacons",
    maslins = "maslins",
    mushrooms = "mushrooms",
    olives = "olives",
    pineapples = "pineapples",
    shrimps = "shrimps",
    sousages = "sousages",
    tomatos = "tomatos"
}
enum sauceImg{
    s1 = "1",
    s2 = "2",
    s3 = "3",
    s4 = "4",
}
enum classesOfDOMElements{
    activeBtn = "activeBtn",
    activeDiv = "activeDiv",
    base = "base",
    ingridient1 = "ingridient1",
    ingridient2 = "ingridient2",
    sauce = "sauce",
}
export {
    mainWrapper,
    fieldForAddingBase,
    fieldForAddingIngridients1,
    fieldForAddingIngridients2,
    fieldForAddingSauce,
    fieldOfPrice,
    typesOfComponents,
    baseImg,
    ingridientsImg,
    sauceImg,
    basicPathesToImgs,
    classesOfDOMElements,
    pizzaWrapper,
    pizzaPlate,
    fieldForRemoving,
    orederBtn
};