//Tela de boas vindas é exibida.
alert("Bem-vindo!" + "\nA seguir pediremos que informe alguns dados.")

//Exibe um alerta pedindo dados da pessoa mais velha.
const velhaNome = prompt("Qual o nome da pessoa mais velha?")
const velhaIdade = prompt("Qual a idade dessa pessoa?")

//Exibe um alerta pedindo dados da pessoa mais nova.
const novaNome = prompt("Qual o nome da pessoa mais nova?")
const novaIdade = prompt("Qual a idade dessa pessoa?")

//Exibe o nome e idade da pessoa mais velha.
alert("A pessoa mais velha é " + velhaNome + ". Ele(a) possui " + velhaIdade + " anos de idade.")

//Exibe o nome e idade da pessoa mais nova.
alert("A pessoa mais nova é " + novaNome + ". Ele(a) possui " + novaIdade + " anos de idade.")

//Exibe a diferença de idade entre as duas pessoas.
alert("A diferença de idade entre " + velhaNome + " e " + novaNome + " é de " + (velhaIdade - novaIdade) + " anos.")