import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from "./contact";

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
    title.innerHTML = "The Eggxcellent";

    header.appendChild(logo);
    header.appendChild(title);

    // NAVIGATION

    const linkNames = ["Home", "Menu", "Contact"];
    
    linkNames.forEach(linkName => {
        const newLink = document.createElement("div");
        newLink.classList.add("navLink");
        newLink.innerHTML = linkName;
        newLink.onclick = switchTab;

        navigation.appendChild(newLink);

        // Set a current tab at load
        if(linkName == "Home") {
            newLink.classList.add("current");
            createHome(modularContent);
        }
    });

    // FOOTER

    const footerText = document.createElement("div");
    footerText.innerHTML = "Copyright @ Pedrolyto --- "

    const footerLink = document.createElement("a");
    footerLink.href = "https://www.flaticon.com/";
    footerLink.innerHTML = "Images from Flaticon";

    footer.appendChild(footerText);
    footer.appendChild(footerLink);

    // Structural linking

    centralContent.appendChild(navigation);
    centralContent.appendChild(modularContent);

    element.appendChild(header);
    element.appendChild(centralContent);
    element.appendChild(footer);
};


function switchTab(e) {
    const src = e.srcElement;

    if(src.classList.contains("current")) {
        return;
    }

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