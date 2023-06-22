import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";



function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.innerText = "GRACANO SUSHI";

    header.appendChild(headerTitle);
    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-item', 'active');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        makeActive(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-item', 'menu-btn');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        makeActive(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-item')
    contactBtn.innerText = "Contact Us"
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        makeActive(contactBtn);
        loadContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.innerHTML = "Copyright © 2023 Gracano Sushi"

    footer.appendChild(footerText);

    return footer;
}

export function makeActive(button) {
    const buttons = document.querySelectorAll('.nav-item');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add('active');
}

function loadWeb() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default loadWeb;