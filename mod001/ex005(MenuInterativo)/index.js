let opcao = ""

do {
    opcao = prompt("Escolha uma opçao:\n Opção 1:(1) \n Opção 2:(2)\n Opção 3:(3)\n Opção 4:(4)\n Encerrar:(5)");
    alert("Você escolheu a opção " + opcao);
} while (opcao != "5") {
    alert("O programa foi encerrado")
}  