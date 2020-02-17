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