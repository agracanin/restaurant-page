function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');
    menu.appendChild(createMenuItem('California Roll', 'Imitation Crab, Avocado, Cucumber', '$6.99'));
    menu.appendChild(createMenuItem('Crunchy Roll', 'Shrimp Tempura, Avocado, Tempura Flakes', '$8.99'));
    menu.appendChild(createMenuItem('Rainbow Roll', 'Crab, Avocado, Cucumber, Tuna, Salmon, Shrimp, Yellowtail', '$12.99'));
    menu.appendChild(createMenuItem('Spicy Tuna Roll', 'Spicy Tuna, Cucumber, Scallions', '$7.99'));
    menu.appendChild(createMenuItem('Tekka Maki', 'Tuna, Sushi Rice', '$6.99'));
    menu.appendChild(createMenuItem('Texan Roll', 'BBQ Beef, Jalapenos, Avocado', '$8.99'));

    return menu;
}

function createMenuItem(name, ingredients, price) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    const foodName = document.createElement('h3');
    foodName.classList.add('food-name');
    foodName.textContent = name;

    const ing = document.createElement('p');
    ing.classList.add('ingredients');
    ing.textContent = ingredients;

    const foodPrice = document.createElement('span');
    foodPrice.classList.add('price');
    foodPrice.textContent = price;

    const foodImg = document.createElement('img');
    foodImg.src = `images/menu-images/${name}.png`;
    foodImg.alt = `Image of ${name}`;

    const atcBtn = document.createElement('button');
    atcBtn.classList.add('atc-btn');
    atcBtn.textContent = 'Add To Cart';

    menuCard.appendChild(foodName);
    menuCard.appendChild(foodImg);
    menuCard.appendChild(ing);
    menuCard.appendChild(foodPrice);
    menuCard.appendChild(atcBtn);

    return menuCard;

}

function loadMenu() {
    const menuMain = document.getElementById('main');
    menuMain.textContent = "";
    menuMain.appendChild(createMenu());
}

export default loadMenu;