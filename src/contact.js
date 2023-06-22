function createContact() {
    const contactUs = document.createElement('div');
    contactUs.classList.add('contact-us');
    const contactHead = document.createElement('h2');
    contactHead.textContent = "Contact Us";

    const contactInfo = document.createElement('div');

    const numberDiv = document.createElement('div');
    numberDiv.classList.add('phone-number');
    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fa-solid', 'fa-phone')
    const number = document.createElement('p')
    number.textContent = "123-456-7890"

    numberDiv.appendChild(phoneIcon);
    numberDiv.appendChild(number);

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address');
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fa-solid', 'fa-location-dot');
    const address = document.createElement('p');
    address.textContent = "123 Main St, New York, USA";

    addressDiv.appendChild(locationIcon);
    addressDiv.appendChild(address);

    contactInfo.appendChild(numberDiv);
    contactInfo.appendChild(addressDiv);
    contactInfo.classList.add('contact-info');

    const mapImg = document.createElement('img');
    mapImg.src = 'images/location.png';
    mapImg.alt = 'Picture of Map Location';

    contactUs.appendChild(contactHead);
    contactUs.appendChild(contactInfo);
    contactUs.appendChild(mapImg);

    return contactUs;
}

function loadContact() {
    const contactMain = document.getElementById('main');
    contactMain.textContent = "";
    contactMain.appendChild(createContact());
}

export default loadContact;