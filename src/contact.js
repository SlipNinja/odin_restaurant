const createContact = (parentElement) => {
    const contact = document.createElement("div");


    const description = document.createElement("div");
    description.innerHTML = "I'm the contact BITCH !";

    contact.appendChild(description);


    parentElement.appendChild(contact);
}

export { createContact };