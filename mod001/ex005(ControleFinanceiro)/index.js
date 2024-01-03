let dinheiro = parseFloat(prompt("Quanto dinheiro você tem"))
let opcao = ""

do {
    alert ("Você possui: R$" + dinheiro)
    opcao = prompt("Deseja adicionar ou remover algum valor? (+ | - | Sair)");
    if (opcao === "+") {
        dinheiro += parseFloat(prompt("Quando deseja adicionar?"));
    }   else if(opcao === "-") {
            dinheiro -= parseFloat(prompt("Quando deseja remover?"));
    }
} while (opcao !== "Sair") {
    alert("Programa encerrado.");
}