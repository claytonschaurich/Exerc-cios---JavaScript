let opcao = "";
let base = "";
let altura = "";
let baseMenor = "";
let baseMaior = "";
let raio = "";
let resultado = "";

do {
    opcao = prompt(
        "CALCULADORA GEOMÉTRICA"+
        "\nSelecione uma área para calcular"+
        "\n 1 : Área de um triângulo."+
        "\n 2 : Área de um retângulo."+
        "\n 3 : Área de um quadrado."+
        "\n 4 : Área de um trapézio."+
        "\n 5 : Área de um circunferência."+
        "\n 6 : Sair do programa."
        )
        switch (opcao) {
            case "1":
                base = parseFloat(prompt("Base: "));
                altura = parseFloat(prompt("Altura: "));
                alert("O resulatado é: " + calcTriangulo(base, altura));

            break
            case "2":
                base = parseFloat(prompt("Base: "));
                altura = parseFloat(prompt("Altura: "));
                alert("O resulatado é: " + calcRetangulo(base, altura));

            case "3":
                base = parseFloat(prompt("Lado: "));
                alert("O resulatado é: " + calcQuadrado(base));

            break
            case "4": 
                baseMenor = parseFloat(prompt("Base Menor: "));
                baseMaior = parseFloat(prompt("Base Maior: "));
                altura = parseFloat(prompt("Altura: "));
                alert("O resulatado é: " + calcTrapezio(baseMenor, baseMenor, altura));

            break
            case "5":
                raio = parseFloat(prompt("Raio: "));
                alert("O resulatado é: " + calcCircunferencia(raio));

            break
            default:
                if(opcao !== "6")
                alert("Opção Inválida");
        }
} while (opcao !== "6");

function calcTriangulo (base, altura) {
    resultado = parseInt((base * altura / 2));
    return resultado;
}

function calcRetangulo (base, altura) {
    resultado = parseInt(base * altura);
    return resultado;
}

function calcQuadrado (base) {
    resultado = parseInt(base**2);
    return resultado;
}

function calcTrapezio (baseMaior, baseMenor, altura) {
    resultado = parseInt((baseMaior + baseMenor) *  altura / 2);
    return resultado;
}

function calcCircunferencia (raio) {
    resultado = parseInt(3.14 * raio ** 2);
    return resultado;
}