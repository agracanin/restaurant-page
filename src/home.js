function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    const headline = document.createElement('h2');
    headline.classList.add('headline');
    headline.innerText = "Experience Authentic Japanese Sushi"
    const subhead = document.createElement('p');
    subhead.classList.add('sub-head');
    subhead.innerText = "Crafted with tradition and precision, our sushi delivers a taste of Japan in every bite."

    const sushiImg = document.createElement('img');
    sushiImg.src = 'images/home-sushi.jpg';
    sushiImg.alt = 'Sushi Image';

    const ctaBtn = document.createElement('button');
    ctaBtn.classList.add('cta-button');
    ctaBtn.textContent = "View Our Menu";

    home.appendChild(headline);
    home.appendChild(sushiImg);
    home.appendChild(subhead);
    home.appendChild(ctaBtn);

    return home;
}

function loadHome() {
    const homeMain = document.createElement('main');
    homeMain.textContent = '';

    homeMain.appendChild(createHome());
    return homeMain;
}

export default loadHome