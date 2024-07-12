//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';   

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Selecione um numero entre 1 e 100';

let numerAleatorio= numeroAleatorio();
let tentativa= 1
function exibirTextoNaTela(tag,text) {
let campo = document.querySelector (tag);
campo.innerHTML = text;

}
    function textoInicial() {
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Selecione um numero entre 1 e 100');
}
    textoInicial()
function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute==numerAleatorio) {
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let fraseTentativa = `voce descubriu o número secreto com ${tentativa} ${palavraTentativa}`; 
        exibirTextoNaTela('p',fraseTentativa);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        limparChute()
        if (chute > numerAleatorio) {
            exibirTextoNaTela ('p','O numero secreto é menor')
            
        }
        else {
            exibirTextoNaTela ('p','O numero secreto é maior')
            
        }
        tentativa++

    }

}

function numeroAleatorio() {
    return parseInt(Math.random () * 100 + 1);
    
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparChute();
    numerAleatorio= numeroAleatorio();
    tentativas= 1;
    textoInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}





   

