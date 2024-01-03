let carro1 = prompt("Qual é o primeiro carro?");
let velocidade1 = parseFloat(prompt("Qual a velocidade dele? (Kms/h"))
let carro2 = prompt("Qual é o segundo carro?");
let velocidade2 = parseFloat(prompt("Qual a velocidade dele (Kms/h?"))

if (vel1 > vel2) {
    alert("O " + carro1 + " é mais rápido!")
} else if(vel1 < vel2) {
    alert("O " + carro2 + " é mais rápido!")
} else {
    alert("Os dois carros estão na mesma velocidade")
}