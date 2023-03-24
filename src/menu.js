import boiled_egg from './images/boiled_egg.png';
import fried_egg from './images/fried_egg.png';
import soft_boiled_egg from './images/soft_boiled_egg.png';
import frozen_egg from './images/frozen_egg.png';
import broken_egg from './images/broken_egg.png';

const createMenu = (parentElement) => {
    const menu = document.createElement("div");
    menu.classList.add("menuContainer");

    const meal1 = createMeal("Boiled egg", boiled_egg);
    const meal2 = createMeal("Fried egg", fried_egg);
    const meal3 = createMeal("Soft boiled egg", soft_boiled_egg);
    const meal4 = createMeal("Frozen egg", frozen_egg);
    const meal5 = createMeal("Broken egg", broken_egg);
    

    menu.appendChild(meal1);
    menu.appendChild(meal2);
    menu.appendChild(meal3);
    menu.appendChild(meal4);
    menu.appendChild(meal5);

    parentElement.appendChild(menu);
}

function createMeal(name, image) {
    const meal = document.createElement("div");
    meal.classList.add("meal")

    const img = new Image();
    img.src = image;

    const title = document.createElement("div");
    title.innerHTML = name;

    meal.appendChild(img);
    meal.appendChild(title);

    return meal;
}

export { createMenu };