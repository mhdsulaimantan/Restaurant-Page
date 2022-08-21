import '../css/about.css'

export const aboutElements = (() => {
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    let paperContainer = document.createElement('div');
    paperContainer.classList.add('paper-container');

    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Green Land is an imaginary restaurant in an imaginary world in La La land.'

    let disc = document.createElement('div');
    disc.classList.add('disc');
    disc.textContent = `The vegetables and fruits here is different than the ones that you have in Earth. So, 
    keep in mind that your experience will be unique and memorable.`
    
    paperContainer.appendChild(header);
    paperContainer.appendChild(disc);
    
    aboutContainer.appendChild(paperContainer);

    return { aboutContainer }
})();