import { renderAddableComponents} from "./utilits.js";
import {addableComponents,addableComponent} from "./domElements.js";
import {orederBtn} from "./constants.js"
import {orderPizzaClick} from "./handlers.js"
function pizzaBuilding(): void{
    let pizzaComponents: addableComponent[] = [];
    orederBtn.addEventListener("click", (e) => {
        e.preventDefault();
        orderPizzaClick(pizzaComponents);
    })
    renderAddableComponents(addableComponents,pizzaComponents);
}
pizzaBuilding();
