const content = document.querySelector('#content');

export const menuContainer = document.createElement('div');

export const makeMenu = () => {
    menuContainer.classList.add('menu-page');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Check out our menu!';
    const menuBox = document.createElement('div');

    const makeMenuItem = (name, description, price) => {
        const menuItem = document.createElement('div');
        menuBox.appendChild(menuItem);

        const menuItemName = document.createElement('h3');
        menuItemName.textContent = name;
        const menuItemDescription = document.createElement('p');
        menuItemDescription.textContent = description;
        const menuItemPrice = document.createElement('p');
        menuItemPrice.textContent = price;
        menuItem.append(menuItemName, menuItemDescription, menuItemPrice);
      };

    const pizza = makeMenuItem('pizza', '10$');
    const burrito = makeMenuItem('buritto', '7$');

    menuContainer.append(menuTitle, menuBox);
    content.append(menuContainer);
};