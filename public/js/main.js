var btnblanc = document.getElementById('btnblanc');
var btnnoir = document.getElementById('btnnoir');
var body = document.querySelector('body');
var header = document.getElementById('header');
var corpsp2 = document.getElementById('corpsp2');
var titre = document.getElementsByTagName('h1')[0];
var div = document.getElementsByTagName('div')[1];
var emporium = document.getElementById('emporium');
var h3 = document.getElementsByTagName('h3');
var footer = document.getElementById('footer');
var h5 = document.getElementsByClassName('h5');
var pute = document.getElementsByClassName('pute');

btnnoir.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    titre.style.color = 'white';
    div.style.backgroundColor = 'black';
    emporium.style.color = 'white';
    footer.style.backgroundColor = 'black';
    pute.style.backgroundColor = 'black';
    
})

btnblanc.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    titre.style.color = 'black'
    div.style.backgroundColor = 'white';
    emporium.style.color = 'black';   
    footer.style.backgroundColor = '#3B3938';
})
