import view from './view.js';

export default async function conversor() {

    let moedaOrigem = await view.obterMoedaOrigem();
    let moedaDestino = await view.obterMoedaDestino();
    let valor = await view.obterValor();
    let API_KEY = "ffb08fa4fc3d15150729cc7b";

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