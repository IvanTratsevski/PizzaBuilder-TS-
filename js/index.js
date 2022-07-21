import { renderAddableComponents,} from "./utilits.js";
import {addableComponents} from "./domElements.js";
import {orederBtn} from "./constants.js"
import {orderPizzaClick} from "./handlers.js"
function pizzaBuilding(){
    let pizzaComponents = [];
    orederBtn.addEventListener("click", (e) => {
        e.preventDefault();
        orderPizzaClick(pizzaComponents);
    })
    renderAddableComponents(pizzaComponents,addableComponents);
}
pizzaBuilding();
