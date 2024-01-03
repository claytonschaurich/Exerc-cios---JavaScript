//Captura o id do formulário e armazena o elemento em uma variável. Também inicia um contador para somar no baseId seguinte.
const form = document.getElementById('devForm');
let count = 0;

//Função acionada ao clicar no botão "Adicionar Tecnologia".
form.addEventListener("button", function (addTec) {
    //Impede que a página seja recarregada.
    addTec.preventDefault();
    
    //Cria o input de texto para adicionar uma nova tecnologia.
    const newTecBr = document.createElement('div'); 
    newTecBr.id = 'newTecBr'
    const newTecText = document.createElement('input');
    newTecText.type = ('text');
    newTecText.id = 'newTecText';
    newTecText.placeholder = 'Adicone uma Tecnologia...';
    newTecText.name = 'technology';
    
    //Define uma variável como baseId para ser incrementada a um contador.
    const baseId = 'experience';

    //Cria um input do tipo radio para marcar a experiência de 0 - 2 anos.
    const newTecXp02Label = document.createElement('label');
    newTecXp02Label.setAttribute('for', baseId + '02years' + count);
    newTecXp02Label.innerText = "0 - 2 anos;";
    const newTecXp02 = document.createElement('input');    
    newTecXp02.type = 'radio';
    newTecXp02.id = baseId + '02years' + count;
    newTecXp02.name = baseId + count;

    //Cria um input do tipo radio para marcar a experiência de 3 - 4 anos.
    const newTecXp34Label = document.createElement('label');
    newTecXp34Label.setAttribute('for', baseId + '34years' + count);
    newTecXp34Label.innerText = "3 - 4 anos;";
    const newTecXp34 = document.createElement('input');
    newTecXp34.type = 'radio';
    newTecXp34.id = baseId + '34years' + count;
    newTecXp34.name = baseId + count;

    //Cria um input do tipo radio para marcar a experiência de +5 anos.
    const newTecXp5Label = document.createElement('label');
    newTecXp5Label.setAttribute('for', baseId + '5years' + count);
    newTecXp5Label.innerText = "+5 anos; ";
    const newTecXp5 = document.createElement('input');
    newTecXp5.type = 'radio';
    newTecXp5.id = baseId + '5years' + count;
    newTecXp5.name = baseId + count;

    //Cria um botão para remover uma linha com as opções de uma tecnologia adicionada.
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover'
    removeButton.id = 'removeButton'
    
    //Insere todos os elemento criados em uma lista e adicona os elementos no documento.
    form.appendChild(newTecBr);
    newTecBr.appendChild(newTecXp02);
    newTecBr.appendChild(newTecXp02Label);
    newTecBr.appendChild(newTecXp34);
    newTecBr.appendChild(newTecXp34Label);
    newTecBr.appendChild(newTecXp5);
    newTecBr.appendChild(newTecXp5Label);
    newTecBr.appendChild(newTecText);
    newTecBr.appendChild(removeButton);
 
    //Permite que ao selecionar o botão "Remover", uma tecnologia seja removida do documento.
    removeButton.addEventListener('click', function () {
        form.removeChild(newTecBr);
    });
    
    //Incrementa o contador para utilizar a contagem para exibir os dados na proxima função.
    count++;
})

//Ativa a função de registrar os dados, com base no id criado na função anterior.
const register = document.getElementById('register')
register.addEventListener("click", function (register){

    //Impede que a página seja recarregada.
    register.preventDefault()

    //Define um array para armazenar os dado inseridos no formulário.
    const formData = []

    //Seleciona os dados inseridos no formulário.
    const techContainers = document.querySelectorAll('#devForm div');
    
     //Seleciona o campo de "Nome" e armazena o valor inserido em um objeto no array "formData", e mostra o valor no console.
    const devName = document.getElementById('devName').value
    formData.push({name:devName})
    console.log("Nome: " + devName);

    //Aciona um loop para iterar sobre cada tecnologia que pode ser adicionada.
    techContainers.forEach(function (container) {

        //Captura os valores inseridos no campo de texto para o nome da tecnologia e a opção marcada no input radio.
        const techText = container.querySelector('input[name="technology"]').value;
        const experience = container.querySelector('input[type="radio"]:checked').nextSibling.textContent.trim();

        //Exibe os valores no console.
        console.log("Experiências: " + techText + " (" + experience + ")");

        //Armazena o resultado dentro de um objeto no array "formData".
        formData.push({ technology: techText, experience: experience });

        //Remove todas os campos de tecnologia do formulário.
        form.removeChild(document.getElementById('newTecBr'))
    })
    //Imprime no console o array "forData" e apaga os valores inseridos no campo de texto "Nome".
    console.log(formData)
    document.getElementById('devName').value = ""
})