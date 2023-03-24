import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from "./contact";

import eggs from './images/eggs.jpg';
import marmite from './images/marmite.png';


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

    // NAVIGATION

    const linkNames = ["Home", "Menu", "Contact"];

    linkNames.forEach(link => {
        const newLink = document.createElement("div");
        newLink.classList.add("navLink");
        newLink.innerHTML = link;
        newLink.onclick = switchTab;

        navigation.appendChild(newLink);
    });


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


function switchTab(e) {
    const src = e.srcElement;
    console.log(src.innerHTML);
    const modularContent = document.getElementById("modularContent");
    const linkNodes = document.getElementsByClassName("navLink");

    for (let link of linkNodes) {
        if(link == src) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    }

    while (modularContent.firstChild) {
        modularContent.removeChild(modularContent.lastChild);
    }

    if(src.innerHTML == "Home") {
        createHome(modularContent);

    } else if (src.innerHTML == "Menu") {
        createMenu(modularContent);

    } else if (src.innerHTML == "Contact") {
        createContact(modularContent);

    } else {
        console.log("ERROR - CANNOT FIND SUITABLE CREATOR");
    }
}

function newElement(type, id) {
    const newElt = document.createElement(type);
    newElt.id = id;
    return newElt;
}

export default buildPage;