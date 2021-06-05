let pegaCampo = document.getElementById("campo");
let pegaCampoWidth = pegaCampo.clientWidth;
let pegaCampoHeight = pegaCampo.clientHeight;
let pegaPontuacao = document.getElementById("pontuacao");
let pegaPosicao = document.getElementById("posicoes");

let pegaCabeca = document.getElementById("cabeca");
pegaCabeca.style.width = (pegaCampoWidth / 20) + 'px';
pegaCabeca.style.height = (pegaCampoHeight / 20) + 'px';

let pegaComida = document.getElementById("comida");
pegaComida.style.width = (pegaCampoWidth / 20) + 'px';
pegaComida.style.height = (pegaCampoHeight / 20) + 'px';

function iniciaJogo() {
    let posicaoCabeca = geraPosicaoAleatorioCabeca();
    let posicaoComida = geraPosicaoAleatorioComida();

    pegaCabeca.style.marginTop = (pegaCampoHeight / 20) * posicaoCabeca[1] + 'px';
    pegaCabeca.style.marginLeft = (pegaCampoWidth / 20) * posicaoCabeca[0] + 'px';

    pegaComida.style.marginTop = (pegaCampoHeight / 20) * posicaoComida[1] + 'px';
    pegaComida.style.marginLeft = (pegaCampoWidth / 20) * posicaoComida[0] + 'px';

    let pontoAtual = 0;

    setInterval(function() {

        if (posicaoCabeca[0]!= posicaoComida[0]) {
            pegaCabeca.style.marginLeft = (pegaCampoWidth / 20) * moveCabecaHorizontal(posicaoCabeca[0], posicaoComida[0])[0] + 'px';
            posicaoCabeca[0] = moveCabecaHorizontal(posicaoCabeca[0], posicaoComida[0])[1];
        } else if (posicaoCabeca[1] != posicaoComida[1]) {
            pegaCabeca.style.marginTop = (pegaCampoHeight / 20) * moveCabecaVertical(posicaoCabeca[1], posicaoComida[1])[0] + 'px';
            posicaoCabeca[1] = moveCabecaHorizontal(posicaoCabeca[1], posicaoComida[1])[1];
        } else {
            pegaPosicao.innerHTML += "Y: "+ (posicaoComida[0] + 1) + " | X: " + (posicaoComida[1] + 1) + "<br />";
            pegaPosicao.innerHTML += "-----------------------------------<br />";

            posicaoComida = geraPosicaoAleatorioComida();
            pegaComida.style.marginTop = (pegaCampoHeight / 20) * posicaoComida[1] + 'px';
            pegaComida.style.marginLeft = (pegaCampoWidth / 20) * posicaoComida[0] + 'px';

            pontoAtual = pontoAtual + 1;
            pegaPontuacao.innerText = pontoAtual;
        }

    }, 100);

}

function geraPosicaoAleatorioCabeca() {
    let geraBlocoLargura = Math.floor(Math.random() * 20)
    let geraBlocoAltura = Math.floor(Math.random() * 20);

    return [geraBlocoLargura, geraBlocoAltura];
}

function geraPosicaoAleatorioComida() {
    let geraBlocoLargura = Math.floor(Math.random() * 20)
    let geraBlocoAltura = Math.floor(Math.random() * 20);

    return [geraBlocoLargura, geraBlocoAltura];
}

//X
function moveCabecaHorizontal(cabeca, comida) {

    let atualizaPosicaoCabeca = cabeca;

    if (cabeca > comida) {
        cabeca = cabeca - 1;
        atualizaPosicaoCabeca = atualizaPosicaoCabeca - 1;
    } else if (cabeca < comida) {
        cabeca = cabeca + 1;
        atualizaPosicaoCabeca = atualizaPosicaoCabeca + 1;
    } else if (cabeca == comida) {
        cabeca = cabeca;
    }

    return [cabeca, atualizaPosicaoCabeca];
}
//Y
function moveCabecaVertical(cabeca, comida) {
    let atualizaPosicaoCabeca = cabeca;

    if (cabeca > comida) {
        cabeca = cabeca - 1;
        atualizaPosicaoCabeca = atualizaPosicaoCabeca - 1;
    } else if (cabeca < comida) {
        cabeca = cabeca + 1;
        atualizaPosicaoCabeca = atualizaPosicaoCabeca + 1;
    } else if (cabeca == comida) {
        return cabeca;
    }
    return [cabeca, atualizaPosicaoCabeca];
}