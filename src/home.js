import loadMenu from "./menu";
import { makeActive } from "./loadWebsite";

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    const headline = document.createElement('h2');
    headline.classList.add('headline');
    headline.innerText = "Dive into the Delicate World of Authentic Sushi"
    const subhead = document.createElement('p');
    subhead.classList.add('sub-head');
    subhead.innerText = "Immerse yourself in the traditional artistry of our sushi. Each piece is a careful symphony of flavors, capturing the nuanced delicacies of Japan's world-renowned cuisine."

    const sushiImg = document.createElement('img');
    sushiImg.src = 'images/home-sushi.jpg';
    sushiImg.alt = 'Sushi Image';

    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta-button');
    ctaBtn.textContent = "View Our Menu";
    ctaBtn.addEventListener('click', () => {
        const menuBtn = document.querySelector('.menu-btn');
        makeActive(menuBtn);
        loadMenu()
    });

    home.appendChild(headline);
    home.appendChild(sushiImg);
    home.appendChild(subhead);
    home.appendChild(ctaBtn);

    return home;
}

function loadHome() {
    const homeMain = document.getElementById('main');
    homeMain.textContent = '';

    homeMain.appendChild(createHome());
    return homeMain;
}

export default loadHome