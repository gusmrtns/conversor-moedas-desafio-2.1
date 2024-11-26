import promptSync from "prompt-sync";

const prompt = promptSync();


export default {
    async obterMoedaOrigem() {
        const moedaOrigem = prompt("Moeda de origem:");
        return moedaOrigem;
    },

    async obterMoedaDestino() {
        const moedaDestino = prompt("Moeda de destino:");
        return moedaDestino;
    },

    async obterValor() {
        const valor = prompt("Valor:");
        return valor;
    },

    async exibirResultado(resultado) {
        let valor = resultado.conversion_result / resultado.conversion_rate;

        console.log(`${resultado.base_code} ${valor} => ${resultado.target_code} ${resultado.conversion_result.toFixed(2)}`);
        console.log(`Taxa: ${resultado.conversion_rate.toFixed(6)}`);
    },

    async exibirMensagemDeErro(error) {
        console.error("Erro:", error);
    },
};
