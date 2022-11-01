import { makeHeader, makeHomepage, container } from './homepage.js';
import { makeMenu, menuContainer } from './menu.js';
import { makeContact, contactContainer } from './contact.js';
import "./scss/styles.scss";

const content = document.querySelector('#content');
makeHomepage();
makeMenu();
makeContact();
content.appendChild(container);


const displayMenu = (e) => {
    if (content.lastChild.classList.value === 'homepage') {
        content.removeChild(container);
        content.appendChild(menuContainer);
    } else if (content.lastChild.classList.value === 'contact-page') {
        content.removeChild(contactContainer);
        content.appendChild(menuContainer);
    }
};
const displayHome = (e) => {
    if (content.lastChild.classList.value === 'menu-page') {
        content.removeChild(menuContainer);
        content.appendChild(container);
    } else if (content.lastChild.classList.value === 'contact-page') {
        content.removeChild(contactContainer);
        content.appendChild(container);
    }
};
const displayContact = (e) => {
    if (content.lastChild.classList.value === 'homepage') {
        content.removeChild(container);
        content.appendChild(contactContainer);
    } else if (content.lastChild.classList.value === 'menu-page') {
        content.removeChild(menuContainer);
        content.appendChild(contactContainer);
    }
}

const menuBtn = makeHeader.menuLink;
menuBtn.addEventListener('click', displayMenu);
const homeBtn = makeHeader.homepageLink;
homeBtn.addEventListener('click', displayHome);
const contactBtn = makeHeader.contactLink;
contactBtn.addEventListener('click', displayContact);


