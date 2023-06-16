const atacante = prompt("Qual é o seu personagem de ataque? ");
const poderDeAtaque = prompt("Qual é o seu poder de ataque? ");
const defensor = prompt("Qual é o nome do personagem defensor? ");
let pontosDeVida = prompt("Quantos pontos você tem de vida?");
const poderDeDefesa = prompt("Qual é o seu poder de defesa? ");
const escudo = prompt("Ele possui um escudo? (Sim/Não)");
let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
} else if (poderDeAtaque < poderDeDefesa) {
  danoCausado = 0;
}
