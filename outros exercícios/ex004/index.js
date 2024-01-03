//Tela de boas vindas é exibida.
alert("Bem vindo ao Conversor de Medidas Espaciais!");

//Solicita ao usuário uma distância para em anos-luz para converter.
let distAnosLuz = prompt("Escolha uma distancia em ly para converter");

//Exibe um menu de opçoes de unidades de medida para conversão.
let opcao = prompt(
    "Deseja realizar a conversão de " + distAnosLuz + "ly para qual unidade?" +
    "\n1. Parsec;" +
    "\n2. Unidade Astronômica;" +
    "\n3. Quilômetros." 
    );

//Define duas variáveis necessárias fora do escopo da estrutura condicional para o prosseguimento do código.
let unidadeEscolhida = "";
let valorConvertido = "";

//Realiza a conversão com base na opção escolhida no "prompt" anterior.
switch (opcao) {
    case "1":
        unidadeEscolhida = "Parsec";
        valorConvertido = distAnosLuz * 0.306601 + "pc";
        break
    case "2":
        unidadeEscolhida = "Unidade Astronômica";
        valorConvertido = distAnosLuz * 63241.1 + "AU";
        break
    case "3":
        unidadeEscolhida = "Quilômetros";
        valorConvertido = distAnosLuz * 9.5 * 10 ** 12 + "km";
        break
    default:
        alert("Opção inválida")
};

//Exibe a distância escolhida para converter, a unidade de medida para qual a distância foi convertida e o resultado da conversão.
alert(
    "A distância escolhida foi de " + distAnosLuz + "ly." +
    "\nA unidade escolhida para a conversão foi a de " + unidadeEscolhida +
    "\nO resultado da conversão foi " + valorConvertido
);