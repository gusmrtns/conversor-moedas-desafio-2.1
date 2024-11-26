import conversor from './conversor.js';

async function main() {
    console.log("=== Conversor de Moedas ===");
    console.log("Digite as informações necessárias para converter as moedas.");
    
    try {
        await conversor(); // Chama o conversor que executa toda a lógica
    } catch (error) {
        console.error("Erro ao executar o aplicativo:", error);
    }
}

main();
