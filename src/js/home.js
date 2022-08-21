import '../css/home.css'

export const homeElements = (() => {
    let container = document.createElement('div');
    container.classList.add('home-container');

    let header = document.createElement('h1');
    header.textContent = "Welcome to Green Land";
    container.appendChild(header);

    let para;
    para = document.createElement('p');
    para.textContent = "Your green light to green food.";
    container.appendChild(para);

    para = document.createElement('p');
    para.textContent = "Come and Join us in our journey to make vegetarian food delicious!";
    container.appendChild(para);

    return { container }
})();