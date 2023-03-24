import eggs from './images/eggs.jpg';
import marmite from './images/marmite.png';

function newElement(type, id) {
    const newElt = document.createElement(type);
    newElt.id = id;
    return newElt;
}

const buildPage = (element) => {
    console.log("Website under construction...")

    const header = newElement("div", "header");
    const centralContent = newElement("div", "centralContent");
    const navigation = newElement("div", "navigation");
    const modularContent = newElement("div", "modularContent");
    const footer = newElement("div", "footer");

    // HEADER

    const logo = new Image();
    logo.src = marmite;
    logo.classList.add("logo");

    const title = document.createElement("h1");
    title.innerHTML = "The Eggxellent";

    header.appendChild(logo);
    header.appendChild(title);

    // MODULARCONTENT ( To be externalised in modules ! )

    /*
    const mainImage = new Image();
    mainImage.src = eggs;
    mainImage.classList.add("main-image");

    modularContent.appendChild(mainImage);
    */

    // FOOTER


    // Structural linking

    centralContent.appendChild(navigation);
    centralContent.appendChild(modularContent);

    element.appendChild(header);
    element.appendChild(centralContent);
    element.appendChild(footer);
};

export default buildPage;