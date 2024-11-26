import conversor from './conversor.js';
import view from './view.js';

async function main() {
    console.log("=== Conversor de Moedas ===");
    while (true) { // Loop que mantém o programa rodando
        try {
            const moedaOrigem = await conversor.obterMoedaOrigem();

            // Verifica se o usuário digitou uma string vazia
            if (!moedaOrigem.trim()) {
            view.exibirMensagemDeErro("Encerrando programa.");
                break; // Sai do loop e encerra o programa
            }

            // Continua a execução do conversor
            await conversor.executarConversao(moedaOrigem);
        } catch (error) {
            console.error("Erro ao executar o aplicativo:", error);
        }
    }
}

main();
