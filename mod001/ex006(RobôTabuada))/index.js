let num =(prompt("Escolha um número para calcular: (1-20)"));
let n = ("")
let resultado = ("")
let mensagem = ("")

for (n = 0; n<=20 ; n++) {
    resultado = (num * n);
    mensagem += (num + " * " + n + "=" + (resultado = (num * n)) +"\n")
}
alert(mensagem)
