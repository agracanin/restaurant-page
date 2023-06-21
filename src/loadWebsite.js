import loadHome from "./home";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = "Gracano";

    header.appendChild(headerTitle);
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-item')
    homeBtn.textContent = "Home";
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-item');
    menuBtn.textContent = "Menu";
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-item')
    contactBtn.innerText = "Contact Us"

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = "Copyright © Gracano 2023"

    footer.appendChild(footerText);

    return footer;
}

function loadWeb() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(loadHome());
    content.appendChild(createFooter());
}

export default loadWeb;