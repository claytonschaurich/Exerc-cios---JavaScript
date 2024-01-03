//Exibe a tela de boas vindas ao usuário.
alert("Bem-vindo ao sistema de navegação espacial da sua nave");

//Esstabelece variáveis essenciais para o funcionamento do código;
let nomeNave = prompt("Qual o nome da sua nave?");
let dobras = 0;
let opcao = "";

//Inicia o loop de dobras espacias, até que o usuário interrompa, escolhendo a opção 2.
do {
    opcao = prompt("Deseja entrar na dobra espacial? \n1.Sim \n2.Não");
    if (opcao == "1"){
        dobras++
    } else {
        alert("Opção inválida.")
    }
} while (opcao !== "2");

//Exibe na tela o nome da nave e a quantidade de dobras esaciais realizadas.
alert("A " + nomeNave + " realizou " + dobras + " dobras espaciais durante a sua viagem");