const nomeTurista = prompt("Qual o nome do turista?")
let cidades = ""
let numViagens = 0
let continuar = confirm("Ele fez alguma viagem? (Ok = Sim | Cancel = Não)")

while (continuar === true) {
    let cidade = prompt("Qual o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    numViagens++
    continuar = confirm("Ele fez alguma nova viagem? (Ok = Sim | Cancel = Não)")
}

alert(
    "Turista: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + numViagens +
    "\n Cidades visitadas:\n"
    + cidades
)


