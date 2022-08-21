import '../css/index.css'
import {homeElements} from './home'
import {menuElements} from './menu'
import { aboutElements } from './about';
import { contactElements } from './contact';

const content = document.querySelector('#content');

// Add navbar
const navBar = document.createElement('nav');
navBar.innerHTML = `
    <ul>
        <li id="home" class="selected">Home</li>
        <li id="menu">Menu</li>
        <li id="about">About Us</li>
        <li id="contact">Contact</li>
    </ul>`;

content.appendChild(navBar);
content.appendChild(homeElements.container);

document.querySelectorAll('li').forEach(li => li.addEventListener('click', (event) => {
    pickTab(event)
}));



function pickTab(event) {
    let tab = event.target.id;
    let selectedLi = document.querySelector('.selected');
    selectedLi.classList.remove("selected");

    if(tab === 'home') {
        content.replaceChildren(navBar, homeElements.container);
        event.target.classList.add("selected");
    }

    else if (tab === 'menu') {
        content.replaceChildren(menuElements.menuContainer, navBar, menuElements.cardContainer);
        event.target.classList.add("selected");
    }
    else if (tab === 'about') {
        content.replaceChildren(navBar, aboutElements.aboutContainer);
        event.target.classList.add("selected");
    }
    else {
        content.replaceChildren(navBar, contactElements.contactContainer);
        event.target.classList.add("selected");
    }
}