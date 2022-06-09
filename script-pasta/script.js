const botao = document.querySelector('.botao');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const vejaMais = document.querySelector('.vejaMais')
const fechar = document.querySelector('.fa-xmark');

// -------------------botão do veja mais----------------------
botao.addEventListener('click', function(){
    vejaMais.classList.add('aparecer');
})

botao2.addEventListener('click', function(){
    vejaMais.classList.add('aparecer');
})

botao3.addEventListener('click', function(){
    vejaMais.classList.add('aparecer');
})
// ---------------------fechando o veja mais--------------------
fechar.addEventListener('click', function(){
    vejaMais.classList.remove('aparecer')
})