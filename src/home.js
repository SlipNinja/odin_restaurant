import egg from "./images/oeuf.png";

const createHome = (parentElement) => {
    const home = document.createElement("div");
    home.classList.add("homeContainer");

    const mainImage = new Image();
    mainImage.src = egg;

    const description = document.createElement("div");
    description.innerHTML = "Welcome to this eggxcellent website&nbsp;! Maybe in the future it'll be some huge success but probably it'll just stay as is, a training website using webpack. Anyway, enjoy your stay&nbsp;!";

    home.appendChild(mainImage);
    home.appendChild(description);

    parentElement.appendChild(home);
}

export { createHome };