var btnblanc = document.getElementById('btnblanc');
var btnnoir = document.getElementById('btnnoir');
var body = document.querySelector('body');
var emporium = document.getElementById('emporium');
var pemporium = document.getElementById('pemporium');


btnnoir.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    emporium.style.color = 'black';
    pemporium.style.color = 'black';
}) 

btnblanc.addEventListener('click', () => {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    
})
                                                                                                                                                            
