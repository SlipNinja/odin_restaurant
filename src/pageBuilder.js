
function newElement(type, id) {
    const newElt = document.createElement(type);
    newElt.id = id;
    return newElt;
}

const buildPage = (element) => {
    console.log("Website under construction...")

    const header = newElement("div", "header");
    const mainContent = newElement("div", "mainContent");
    const footer = newElement("div", "footer");

    element.appendChild(header);
    element.appendChild(mainContent);
    element.appendChild(footer);
};

export default buildPage;