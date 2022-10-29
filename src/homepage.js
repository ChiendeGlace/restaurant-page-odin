const content = document.querySelector('#content');



export const makeHeader = (() => {

    const header = document.createElement('header');
    content.appendChild(header);

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Galactic Pizza';

    const headerLinks = document.createElement('div');
    const menuLink = document.createElement('button');
    menuLink.textContent = 'Menu';
    const homepageLink = document.createElement('button');
    homepageLink.textContent = 'Home';
    const contactLink = document.createElement('button');
    contactLink.textContent = 'Contact';
    headerLinks.append( homepageLink, menuLink, contactLink);

    header.append(pageTitle, headerLinks);

    return { menuLink, homepageLink, contactLink };

})();

export const container = document.createElement('div');

export const makeHomepage = () => {
    container.classList.add('homepage');

    const homepageTitle = document.createElement('h2');
    homepageTitle.textContent = 'Come to us and try some delicious dish!';
    const homepageText = document.createElement('p');
    homepageText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque dolor. Mauris vel scelerisque nisl. Vivamus sit amet rhoncus urna, at interdum dui. Sed congue aliquet sem et ornare. Etiam lacinia nisl est, a commodo sapien varius sit amet. Integer sodales risus quam, malesuada sollicitudin metus tempor vitae.';
    const homepageButton = document.createElement('button');
    homepageButton.textContent = 'Order now';
    const homepageBox = document.createElement('div');

    const openHours = document.createElement('div');
    const openHoursTitle = document.createElement('h3');
    openHoursTitle.textContent = 'Hours';
    const openHoursList = document.createElement('ul');
    const workDays = document.createElement('li');
    workDays.textContent = 'Mon-Thurs: 11AM - 8PM';
    const weekDays = document.createElement('li');
    weekDays.textContent = 'Fri-Sun: 12AM - 10PM';
    
    const locationDiv = document.createElement('div');
    const locationTitle = document.createElement('h3');
    locationTitle.textContent = 'Location';
    const locationText = document.createElement('p');
    locationText.textContent = '32 Holly St. Haines City, FL 33844'

    openHours.append(openHoursTitle, openHoursList);
    openHoursList.append(workDays, weekDays);
    locationDiv.append(locationTitle, locationText);
    homepageBox.append(openHours, locationDiv);
    container.append(homepageTitle, homepageText, homepageButton, homepageBox);
    content.append(container);
};