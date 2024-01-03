let imoveis = []
quantImoveis = imoveis.length

do {
        const casa = {}
        opcao = prompt(
        "Imoveis Cadastrados: " + quantImoveis + ";\n" +
        "Opção 1: Cadastrar novo imóvel:\n" +
        "Opção 2: Exibir imóvies cadastrados:\n" +
        "Opção 3: Sair do programa:")
    switch (opcao) {
        case "1":
            casa.nomeProprietario = (prompt("Qual o nome do proprietário?"));
            casa.numQuartos = (parseInt(prompt("Quantos quartos?")));
            casa.numBanheiros = (parseInt(prompt("Quantos banheiros?")));
            casa.garagem = (confirm("Possui garágem? (Ok = Sim | Cancel = Não)"));
            imoveis.push(casa);
            alert("Imóvel cadastrado com sucesso!");
            break
        case "2":
            for (let i = 0; i <imoveis.length; i++)
                alert (
                    "Imóvel: " + (i + 1) + ";\n" +
                    "Proprietário: " + imoveis[i].nomeProprietario + ";\n" +
                    "N de quartos: " + imoveis[i].numQuartos + ";\n" +
                    "N de banheiros: " + imoveis[i].numBanheiros + ";\n" +
                    "Com garágem? " + (imoveis[i].garagem ? "Sim" : "Não") + ";"
                )
        break
        default:
            if (opcao !== "3")
                alert("Opção inválida")
    }
}  while (opcao !== "3")