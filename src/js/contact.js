import '../css/contact.css'

export const contactElements = (() => {
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.textContent = `You can reach us anytime by:
    Email: contact@greenland.com
    Phone: 555 - 5555555.
    `

    contactContainer.appendChild(contactInfo);

    return { contactContainer };

})();
