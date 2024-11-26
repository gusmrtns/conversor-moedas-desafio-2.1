# Conversor de Moedas - Desafio Node.js #2.1

## 📋 Descrição
Este projeto é um **Conversor de Moedas** desenvolvido em **JavaScript (Node.js)** como parte da formação Back-end - Node.js/Express. O objetivo é realizar a conversão de valores monetários entre diferentes moedas utilizando a API REST [Exchangerate API](https://www.exchangerate-api.com/docs/overview).

A aplicação é executada no terminal e permite que o usuário informe:
- Moeda de origem
- Moeda de destino
- Valor a ser convertido

Após a entrada, a aplicação apresenta:
- O valor convertido
- A taxa de conversão utilizada

---

## 🛠️ Funcionalidades
- Conversão de moedas utilizando a API Exchangerate.
- Validação de entrada:
  - Moeda de origem e destino devem ter 3 caracteres.
  - Moeda de origem não pode ser igual à moeda de destino.
  - O valor deve ser maior que 0.
- Mensagens de erro apropriadas em caso de:
  - Erros de comunicação com a API.
  - Problemas na conversão.
- Arredondamento:
  - Valor convertido: 2 casas decimais.
  - Taxa de conversão: 6 casas decimais.
- O programa encerra ao digitar uma string vazia como moeda de origem.

---

## 🎯 Regras
1. **Validações de entrada**:
   - Moeda origem ≠ Moeda destino.
   - Moedas devem ter exatamente 3 caracteres.
   - Valor de entrada deve ser maior que 0.
2. **Resultados formatados**:
   - Valor convertido com 2 casas decimais.
   - Taxa de conversão com 6 casas decimais.
3. **Encerramento do programa**:
   - O programa finaliza quando a moeda de origem é uma string vazia.
4. **Erros tratados**:
   - Comunicação com a API.
   - Problemas durante a conversão.

---

## 📖 Documentação da API
- [Exchangerate API - Documentação Oficial](https://www.exchangerate-api.com/docs/overview)

Exemplo de requisição para converter USD 100,00 para BRL:
```
https://v6.exchangerate-api.com/v6/SUA_API_KEY/pair/USD/BRL/100
```

---

## 🏆 Critérios de Avaliação
1. Aplicação do paradigma de programação orientada a objetos:
   - Separação e alocação de responsabilidades.
   - Boa coesão e baixo acoplamento.
2. Comportamento conforme regras definidas.
3. Qualidade do código:
   - Indentação.
   - Nomes apropriados para variáveis e métodos.
   - Métodos coesos e com parâmetros adequados.
4. Mensagens de erro apropriadas.
