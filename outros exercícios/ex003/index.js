//Tela de boas vindas é exibida.
alert("Bem-vindo!" + "\nA seguir pediremos que informe alguns dados.");

//Pergunta e nome do piloto e a velocidade inicial.
let nomePiloto = prompt("Qual o nome do piloto?");
let velocidadeCarro = 0;

//Pede uma nova velocidade para o carro.
let novaVelocidade = prompt("A que velocidade " + nomePiloto + " irá dirigir?");
let confirmacao = confirm(nomePiloto + " irá dirigir a " + novaVelocidade + "km/h");

//Define a velocidade solicitada como velocidade atual do carro.
if (confirmacao == true) {
    velocidadeCarro = novaVelocidade;
}

//Exibe uma das seguintes mensagens com base na velocidade do carro.
if (velocidadeCarro == 0) {
    alert(nomePiloto + "Está parado(a), deve considerar acelerar o carro");

} else if (velocidadeCarro <= 40) {
    alert(nomePiloto + " está devagar, pode acelerar um pouco.");

} else if (velocidadeCarro <= 80){
    alert(nomePiloto + " está a uma boa velocidade.");

} else if (velocidadeCarro <= 100){
    alert(nomePiloto + " está em alta velocidade, poderia diminuir.");

} else if (velocidadeCarro > 100){
    alert(nomePiloto + " está a uma velocidade perigosa, deve reduzir imediatamente.");
}