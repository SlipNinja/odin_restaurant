import angry from "./images/angry.png"
import cool from "./images/cool.png"
import rire from "./images/rire.png"

const createContact = (parentElement) => {
    const contacts = document.createElement("div");
    contacts.classList.add("contactContainer");

    const contact1 = createProfile("Bobby", "05 77 77 77 77", rire);
    const contact2 = createProfile("Gertrude", "05 66 66 66 66", angry);
    const contact3 = createProfile("Pedrolyto", "05 67 67 67 67", cool);


    contacts.appendChild(contact1);
    contacts.appendChild(contact2);
    contacts.appendChild(contact3);

    parentElement.appendChild(contacts);
}

export { createContact };


function createProfile(name, number, image) {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const img = new Image();
    img.src = image;

    const title = document.createElement("div");
    title.innerHTML = name;

    const phone = document.createElement("div");
    phone.innerHTML = number;

    contact.appendChild(img);
    contact.appendChild(title);
    contact.appendChild(phone);

    return contact;
}