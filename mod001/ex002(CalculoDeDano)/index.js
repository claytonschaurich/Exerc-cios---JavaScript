let char1 = prompt("Qual o nome do primeiro personagem?");
let dmgChar1 = prompt("Qual o seu dano de ataque?");

let char2 = prompt("Qual o nome do segundo personagem?");
let lpChar2 = prompt("Quantos pontos de vida ele possui?");
let defChar2 = prompt("Quantos pontos de defesa ele possui?");
let shieldChar2 = confirm("Ele possui um escudo? (Ok = Sim | Cancel = Não)");

dmgChar1 = parseInt(dmgChar1, 10);
lpChar2 = parseInt(lpChar2, 10);
defChar2 = parseInt(defChar2, 10);


if (dmgChar1 > defChar2 && shieldChar2 == false) {
    lpChar2 = (lpChar2 - (dmgChar1 - defChar2));
    alert(char1 + " causou " + (dmgChar1 - defChar2) + " pontos de dano")
    alert("A vida atual de " + char2 + " é de " + lpChar2 + " pontos")
} else if (dmgChar1 > defChar2 && shieldChar2 == true){
    lpChar2 = (lpChar2 - ((dmgChar1 - defChar2)/2));
    alert(char1 + " causou " + ((dmgChar1 - defChar2)/2) + " pontos de dano")
    alert("A vida atual de " + char2 + " é de " + lpChar2 + " pontos")
}

