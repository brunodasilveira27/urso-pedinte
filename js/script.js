const btn = {

 sim: document.querySelector('#btn-sim'),
 nao: document.querySelector('#btn-nao'),
 fechar: document.querySelector('#btn-fechar')

};

const contrato = document.querySelector('#contrato');

function exibirContrato(exibir) {

 if(exibir) {
    contrato.style.display = 'flex';
 }
 
 else {
  contrato.style.display = 'none';
 };

};

function mudarPosicao(elemento) {

 // position absolute

 elemento.style.position = 'absolute';

 // pegar a altura e largura da página

 const alturaPagina = window.innerHeight;
 const larguraPagina = window.innerWidth;

 // sortear uma posição aleatória de x e y baseado na altura e largura da página

 const xSorteado = Math.floor(Math.random() * (larguraPagina - 90));
 const ySorteado = Math.floor(Math.random() * (alturaPagina - 90));

 elemento.style.top = `${ ySorteado }px`;
 elemento.style.left = `${ xSorteado }px`;

};

window.onload = function() {

 if(btn.sim) {

    btn.sim.addEventListener('click', function() {
     exibirContrato(true);
    });
    
 };

 if(btn.nao) {

    btn.nao.addEventListener('click', function() {
     mudarPosicao(this);
    });

 };

 if(btn.fechar) {
    
    btn.fechar.addEventListener('click', function() {
     exibirContrato(false);
    });

 };

};

window.onmousemove = function( event ) {

 const distanciaMinima = 100;

 const coordenadasBotao = btn.nao.getBoundingClientRect();
 const yBotao = coordenadasBotao.top;
 const xBotao = coordenadasBotao.left;

 const dy = event.clientY - yBotao;
 const dx = event.clientX - xBotao;

 if(Math.floor(Math.sqrt(dx * dx + dy * dy)) <= distanciaMinima) {
     mudarPosicao(btn.nao);
 };

};
