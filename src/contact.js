const content = document.querySelector('#content');

export const contactContainer = document.createElement('div');

export const makeContact = () => {
    contactContainer.classList.add('contact-page');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact us!';
    const contactBox = document.createElement('div');

    const makeContactItem = (name, phone, email) => {
        const contactItem = document.createElement('div');
        contactBox.appendChild(contactItem);

        const contactItemName = document.createElement('h3');
        contactItemName.textContent = name;
        const contactItemPhone = document.createElement('p');
        contactItemPhone.textContent = phone;
        const contactItemEmail = document.createElement('p');
        contactItemEmail.textContent = email;
        contactItem.append(contactItemName, contactItemPhone, contactItemEmail);
      };

    const George = makeContactItem('George Bush', '123-2345-3456', 'george.bushhhher@email.emailcom');

    contactContainer.append(contactTitle, contactBox);
    content.append(contactContainer);
};