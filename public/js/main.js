// BOUTON NOIR/BLANC

var btnblanc = document.getElementById('btnblanc');
var btnnoir = document.getElementById('btnnoir');
var body = document.querySelector('body');
var emporium = document.getElementById('emporium');
var pemporium = document.getElementById('pemporium');
var corpsp5 = document.getElementById('corpsp5');


btnnoir.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    emporium.style.color = 'black';
    pemporium.style.color = 'black';
    corpsp5.style.color = "black";
}) 

btnblanc.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    
})
                                                                                                                                                            
// BOUTON CONNEXION

var btnconnexion = document.getElementById('btnconnexion');
var connexion = document.getElementById('connexion'); 
var btnclose = document.getElementById('btnclose');
var btnconnecter = document.getElementById('btnconnecter');
var btnsinscrire = document.getElementById('btnsinscrire');
var connection = document.getElementById('connection');
var inscription = document.getElementById('inscription');

btnconnexion.addEventListener('click', () => {
    connexion.classList.replace('d-none', 'd-block');
    
    btnclose.addEventListener('click', () => {
        connexion.classList.replace('d-block', 'd-none');
    })
})

btnconnecter.addEventListener('click', () => {
    inscription.classList.replace('d-block', 'd-none');
    connection.classList.replace('d-none', 'd-block');
})

btnsinscrire.addEventListener('click', () => {
    connection.classList.replace("d-block", "d-none");
    inscription.classList.replace("d-none", "d-block");
})


// NAVBAR

var nav = document.getElementById('nav');
var navtop = nav.offsetTop; 

function fixnav() {
    if (window.scrollY >= navtop) {
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add('fixed-nav');
        
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', fixnav); 


// CAROUSEL

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

var sofa = document.getElementById('sofa');
var gloves = document.getElementById('gloves');
var bol = document.getElementById('bol');
var bag = document.getElementById('bag');
var tshirt = document.getElementById('tshirt');
var plates = document.getElementById('plates');
var sofa2 = document.getElementById('sofa2');
var bed = document.getElementById('bed');

btn1.addEventListener('click', () => {
    sofa.classList.replace('d-none', 'd-block');
    gloves.classList.replace('d-none', 'd-block');
    bol.classList.replace('d-none', 'd-block');
    bag.classList.replace('d-none', 'd-block');
    tshirt.classList.replace('d-block', 'd-none');
    plates.classList.replace('d-block', 'd-none');
    sofa2.classList.replace('d-block', 'd-none');
    bed.classList.replace('d-block', 'd-none');
    
})

btn2.addEventListener('click', () => {
    sofa.classList.replace('d-block', 'd-none');
    gloves.classList.replace('d-none', 'd-block');
    bol.classList.replace('d-none', 'd-block');
    bag.classList.replace('d-none', 'd-block');
    tshirt.classList.replace('d-none', 'd-block');
    plates.classList.replace('d-block', 'd-none');
    sofa2.classList.replace('d-block', 'd-none');
    bed.classList.replace('d-block', 'd-none');
})


btn3.addEventListener('click', () => {
    sofa.classList.replace('d-block', 'd-none');
    gloves.classList.replace('d-block', 'd-none');
    bol.classList.replace('d-none', 'd-block');
    bag.classList.replace('d-none', 'd-block');
    tshirt.classList.replace('d-none', 'd-block');
    plates.classList.replace('d-none', 'd-block');
    sofa2.classList.replace('d-block', 'd-none');
    bed.classList.replace('d-block', 'd-none');
})

btn4.addEventListener('click', () => {
    sofa.classList.replace('d-block', 'd-none');
    gloves.classList.replace('d-block', 'd-none');
    bol.classList.replace('d-block', 'd-none');
    bag.classList.replace('d-block', 'd-none');
    tshirt.classList.replace('d-none', 'd-block');
    plates.classList.replace('d-none', 'd-block');
    sofa2.classList.replace('d-none', 'd-block');
    bed.classList.replace('d-none', 'd-block');
})