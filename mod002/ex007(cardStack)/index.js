let pilha = []
let card = ""

do {
  opcao = prompt("Pilha de Cartas: \nTabela de comandos:\n1 - Adicionar Carta\n2 - Remover Carta\n3 - Sair do Menu.");

  switch (opcao) {
        case "1":
            pilha.push(prompt("Qual o número da carta?"));
            console.log(pilha)
            break;
        case "2":
            pilha.pop(alert("A carta retirada foi:" + card));
            break;
  }
} while (opcao !== "3");

alert("Programa Encerrado.");