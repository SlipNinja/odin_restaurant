const createMenu = (parentElement) => {
    const menu = document.createElement("div");


    const description = document.createElement("div");
    description.innerHTML = "I'm the menu BITCH !";

    menu.appendChild(description);


    parentElement.appendChild(menu);
}

export { createMenu };