//Exibe a tela de boas vindas ao usuário.
alert("Bem vindo ao Ocultador de Nomes!");

//Pergunta ao usuário o nome que será oculto e converte todas as letras em minúsculo
let nome = prompt("Digite um nome para ocultar:").toLowerCase();

//Pergunta ao usuário os carácteres que serão substituidos e os novos caractéres. (Também faz a formatação do nome para apresentar a primeira letra em maiúsculo)
let letraSubstituida = prompt("Qual letra será substiduida no nome " + nome[0].toUpperCase() + nome.substring(1) + " ?");
let letraSubstituir = prompt("Qual letra ira substituir a letra " + letraSubstituida + " ?");

//Cria a variável para armazenar o nome com os carácteres substituidos.
let nomeOculto = "";

//Faz a substituição das letras através de um loop entre os caractéres do nome digitado e substitui os carácteres com base nos testes.
for (i = 0 ; i < nome.length ; i++) {
    if (nome[i] === letraSubstituida) {
        nomeOculto += letraSubstituir;
    } else {
        if (nome[i] != letraSubstituida)
            nomeOculto += nome[i];
    }
}

//Exibe o resultado da ocultação de nome com a primeira letra do novo nome em maiúsculo.
alert("O resultado do ocultador foi " + nomeOculto[0].toUpperCase() + nomeOculto.substring(1) + ".")