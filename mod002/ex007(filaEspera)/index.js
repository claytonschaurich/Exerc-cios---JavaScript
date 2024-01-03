let fila = [];
let opcao = ""

do {
  opcao = prompt("Fila de Pacientes: " + fila + "\nTabela de comandos:\n1 - Adicionar Paciente\n2 - Remover Paciente\n3 - Sair do Menu.");

  switch (opcao) {
    case "1":
      fila.push(prompt("Qual o nome do paciente?"));
      alert(fila);
      break;
    case "2":
      fila.shift(prompt("Qual o nome do paciente?"));
      alert(fila);
      break;
  }
} while (opcao !== "3");

alert("Programa Encerrado.");