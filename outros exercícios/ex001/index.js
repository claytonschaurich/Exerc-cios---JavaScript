//Tela de boas vindas é exibida.
alert("Bem-vindo!" + "\nA seguir pediremos que informe alguns dados.")

//Pergunta os dados nome e idade, e pede uma confirmação.
const nome = prompt("Informe seu nome:");
const idade = prompt("Informe sua idade:");
const confirmacao = confirm("Sua idade é " + idade + "?");

//Exibe um alerta de uma mensagem com os dados inseridos pelo usuário.
alert("Seu nome é " + nome + "\nVocê possui " + idade + " anos." + "\nA idade foi confirmada? " + confirmacao + ".")