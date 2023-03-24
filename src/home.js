const createHome = (parentElement) => {
    const home = document.createElement("div");


    const description = document.createElement("div");
    description.innerHTML = "I'm the home BITCH !";

    home.appendChild(description);


    parentElement.appendChild(home);
}

export { createHome };