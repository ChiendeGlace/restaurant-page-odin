const content = document.querySelector('#content');

export const contactContainer = document.createElement('div');

export const makeContact = () => {
    contactContainer.classList.add('contact-page');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact us!';
    const contactBox = document.createElement('div');

    const makeContactItem = (source, name, phone, email) => {
        const contactItem = document.createElement('div');
        contactBox.appendChild(contactItem);
        contactBox.classList.add('contact-box');
        const contactItemImg = document.createElement('img');
        contactItemImg.src = source;
        const contactItemName = document.createElement('h3');
        contactItemName.textContent = name;
        const contactItemPhone = document.createElement('p');
        contactItemPhone.textContent = phone;
        const contactItemEmail = document.createElement('p');
        contactItemEmail.textContent = email;
        contactItem.append(contactItemImg, contactItemName, contactItemPhone, contactItemEmail);
      };

    const john = makeContactItem("https://i.postimg.cc/zvYwMNzq/chef1.jpg", 'John Doe', '(222)-345-3456', 'john.doe@email.com');
    const george = makeContactItem("https://i.postimg.cc/CMbs8R75/chef2.jpg", 'George Doe', '(467)-095-3776', 'george.doe@email.com');
    const jeff = makeContactItem("https://i.postimg.cc/pdyB5kcM/chef3.jpg", 'Jeff Doe', '(289)-675-3336', 'jeff.doe@email.com');
    const alan = makeContactItem("https://i.postimg.cc/T3d0fTrw/chef4.jpg", 'Alan Doe', '(902)-225-3116', 'alan.doe@email.com');

    contactContainer.append(contactTitle, contactBox);
    return contactContainer
};