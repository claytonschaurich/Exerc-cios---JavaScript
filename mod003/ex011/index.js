//Função ativada ao selecinar o botão "Escalar".
function addPlayer() {
    //Captura os valores digitados nos campos do formulário HTML, que são os dados do jogador a ser escalado.
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    //Solicita uma confirmação do usuário para escalar um jogador e concatena os valores digitados no formulário.
    const add = confirm("Deseja escalar o " + position + ": " + name + " (" + number + ")");

    //Se a confirmação for aceita, ativa a estrutura condiconal para criar um novo item com os dados do jogador escalado.
    if (add) {
        //Define uma tag li com um id contendo o número do jogador e um innerText contendo todos os dados do jogador escalado.
        const newPlayer = document.createElement('li');
        newPlayer.id = 'jogador - ' + number;
        newPlayer.innerText = position + ": " + name + " (" + number + ")";

        //Localiza o id "teamList", dentro de uma ul, onde será inserida a li contendo os dados do jogador.
        const teamListItem = document.getElementById("teamList");
        
        //Adiciona o li "newPlayer" dentro da ul "teamList".
        teamListItem.appendChild(newPlayer);

        //Limpa os campos do formulário HTML definindo seus valores como strings vazias.
        document.getElementById("position").value = "";
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
    }
}

//Função ativada ao selecionar o botão "Remover".
function removePlayer () {
    //Captura o valor do número digitado no formulário HTML e armazena numa constante.
    const number = document.getElementById("numberRemove").value;
    //Seleciona o jogador com o id que possuir o mesmo número digitado no formulário HMTL e armazenda o id numa constante.
    const playerRemoved = document.getElementById('jogador - ' + number);

    //Solicita uma confirmação do usuário para remover um jogador.
    const remove = confirm("Deseja remover o " + playerRemoved.innerText + "?");

    //Se a confirmação for aceita, ativa a estrutura condiconal para remover um item com o numero do jogador.
    if (remove) {
        //Remove o jogador confome o número digitado no formulário HTML.
        document.getElementById("teamList").removeChild(playerRemoved);
        //Limpa o campo do formulário HTML definindo seu valor como string vazia.
        document.getElementById("number").value = ""
    }
}