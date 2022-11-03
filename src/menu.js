const content = document.querySelector('#content');

export const menuContainer = document.createElement('div');

export const makeMenu = () => {
    menuContainer.classList.add('menu-page');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Check out our menu!';
    const menuBox = document.createElement('div');

    const makeMenuItem = (source, name, description, price) => {
        const menuItem = document.createElement('div');
        menuBox.appendChild(menuItem);
        const menuItemImg = document.createElement('img');
        menuItemImg.src = source;
        const menuItemName = document.createElement('h3');
        menuItemName.textContent = name;
        const menuItemDescription = document.createElement('p');
        menuItemDescription.textContent = description;
        const menuItemPrice = document.createElement('p');
        menuItemPrice.textContent = price;
        menuItemPrice.classList.add('price');
        menuItem.append(menuItemImg, menuItemName, menuItemDescription, menuItemPrice);
      };

    const meatPizza = makeMenuItem( "./../src/pizza1.jpg",'All Meat', 'Pepperoni, salami, ham, Italian sausage, linguica, ground beef, and extra cheese', '$24.99');
    const chickenPizza = makeMenuItem("./../src/pizza2.jpg", 'White Chicken Pizza', 'Chicken, red onions and green peppers over garlic white sauce', '$22.99');
    const hawaiianPizza = makeMenuItem("./../src/pizza3.jpg", 'Hawaiian Pizza', 'Canadian bacon, pineapple and extra cheese', '$26.99');
    const bbqChickenPizza = makeMenuItem("./../src/pizza4.jpg", 'BBQ Chicken', 'BBQ sauce, chicken and red onion', '$23.99');
    const mexicanPizza = makeMenuItem("./../src/pizza5.jpg", 'Mexican Style', 'Spicy. Ground beef, Mexican chorizo, green onions, and jalapeños, topped with fresh cilantro.', '$26.99');
    const vegiePizza = makeMenuItem("./../src/pizza6.jpg", 'Veggie', 'Black olives, mushrooms, bell peppers, red onions, tomatoes, and fresh garlic.', '$18.99');


    menuContainer.append(menuTitle, menuBox);
    menuBox.classList.add('menu-box');
    return menuContainer;
};