import view from './view.js';

export default async function conversor() {

    let moedaOrigem = await view.obterMoedaOrigem();
    let moedaDestino = await view.obterMoedaDestino();
    let valor = await view.obterValor();
    let API_KEY = "ffb08fa4fc3d15150729cc7b";

    if (!await validarDiferencaMoedas(moedaOrigem, moedaDestino)) {
        return view.exibirMensagemDeErro("Moedas de origem e destino iguais.");
    }

    if (!await validarTamanhoMoeda(moedaOrigem) || !await validarTamanhoMoeda(moedaDestino)) {
        return view.exibirMensagemDeErro("Moedas devem ter 3 caracteres.");
    }

    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${moedaOrigem}/${moedaDestino}/${valor}`, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).then(data => {
        view.exibirResultado(data);
    }).catch(error => {
        view.exibirMensagemDeErro(error);
    })

}

async function validarDiferencaMoedas(moedaOrigem, moedaDestino) {
    if (moedaOrigem === moedaDestino) {
        return false;
    }
    return true;
}

async function validarTamanhoMoeda(moeda) {
    if (moeda.length !== 3) {
        return false;
    }
    return true;
}