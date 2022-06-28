//stampare sulla console le informaziodi di nome, ruolo e la stringa della foto;

const ourTeam = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        image : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        image : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        image : "./img/walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        image : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        image : "./img/scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        image : "./img/barbara-ramos-graphic-designer.jpg"
    },

]

const myWrapper = document.getElementById('wrapper');

for (let i = 0; i < ourTeam.length; i++){
    
    let newImg = createNewimg(ourTeam[i].image);
    myWrapper.append(newImg);

    let newNameElement = createNewElement(ourTeam[i].nome, 'span');
    let newRoleElement = createNewElement(ourTeam[i].ruolo, 'span');

    myWrapper.append(newNameElement, newRoleElement);
    
    // myWrapper.innerHTML += (`
    //     ${ourTeam[i].nome} ${ourTeam[i].ruolo}
    // `);
    
}

function createNewimg(attribute) {
    const currentImg = document.createElement('img');
    currentImg.setAttribute("src", attribute)
    currentImg.classList.add('d-block');
    return currentImg;
}


function createNewElement(element, type) {
    const currentElement = document.createElement(type);
    currentElement.classList.add('d-block');
    currentElement.innerHTML = element;
    return currentElement;
}