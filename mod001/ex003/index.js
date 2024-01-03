let valorEmM = parseFloat(prompt("Escolha um valor em metros para converter:"));
let convertPara = prompt("Deseja converter para qual unidade");

switch (convertPara) {
    case "mm":
        alert("O valor convertido é de " + (valorEmM*1000) + "mm");
        break
    case "cm":
        alert("O valor convertido é de " + (valorEmM*100) + "cm");
        break
    case "dm":
        alert("O valor convertido é de " + (valorEmM*10) + "dm");
        break
    case "dam":
        alert("O valor convertido é de " + (valorEmM/10) + "dam");
        break
    case "hm":
        alert("O valor convertido é de " + (valorEmM/100) + "hm");
        break
    case "km":
        alert("O valor convertido é de " + (valorEmM/1000) + "km");
        break;
    default:
        alert("Unidade não existente")
}