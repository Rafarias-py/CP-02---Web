// ===================================================
// Sistema Básico de Gerenciamento de Vinhos
// Vinharia Agnello
// ===================================================

// ---------------------------------------------------
// 1. Coleta das informações do vinho usando prompt()
// ---------------------------------------------------

const nomeVinho = prompt("Digite o nome do vinho:");
const tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
const safraVinho = prompt("Digite a safra do vinho (ano):");
const quantidadeEstoque = prompt("Digite a quantidade em estoque:");

// ---------------------------------------------------
// 2. Alerta confirmando que o cadastro foi realizado
// ---------------------------------------------------

alert("Cadastro realizado! Veja os detalhes no console.");

// ---------------------------------------------------
// 3. Aviso antes de exibir os detalhes no console
// ---------------------------------------------------

alert("A seguir, veja os detalhes do vinho no console.");

// ---------------------------------------------------
// 4. Exibição organizada dos dados no console
// ---------------------------------------------------

console.log("========================================");
console.log("         FICHA DO VINHO CADASTRADO       ");
console.log("========================================");
console.log("Nome do vinho:        " + nomeVinho);
console.log("Tipo:                 " + tipoVinho);
console.log("Safra:                " + safraVinho);
console.log("Quantidade em estoque: " + quantidadeEstoque);
console.log("========================================");

// =====================================================
// Sistema de Avaliação de Estoque e Tendência de Vinhos
// Vinheria Agnello - Checkpoint 02
// =====================================================

// -----------------------------------------------------
// FUNÇÕES DE VALIDAÇÃO
// -----------------------------------------------------

// Pede um texto e repete até o usuário digitar algo válido
function lerTexto(mensagem) {
    let valor = prompt(mensagem);

    while (valor === null || valor.trim() === "") {
        alert("Entrada inválida. O campo não pode ficar vazio.");
        valor = prompt(mensagem);
    }

    return valor.trim();
}

// Pede um número e repete até estar dentro do intervalo permitido
function lerNumero(mensagem, minimo, maximo) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor) || valor < minimo || valor > maximo) {
        alert("Digite um número entre " + minimo + " e " + maximo + ".");
        valor = Number(prompt(mensagem));
    }

    return valor;
}

// Teste temporário (vamos apagar depois)
let testeNome = lerTexto("Nome do vinho:");
let testeSafra = lerNumero("Safra (ano):", 1900, 2026);
console.log(testeNome, testeSafra);