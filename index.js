let nomeHeroi = "Douglas";
let quantidadeXp = 10000;

console.log(`Olá ${nomeHeroi}`);
if (quantidadeXp <= 1000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro!`);
} else if (quantidadeXp <= 2000 ) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze!`);
} else if (quantidadeXp <= 5000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata!`);
} else if (quantidadeXp <= 7000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Ouro!`);
} else if (quantidadeXp <= 8000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina!`);
} else if (quantidadeXp <= 9000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Ascendente!`);
} else if (quantidadeXp <= 10000) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Imortal!`);
} else if (quantidadeXp >= 10001) {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de Radiante!`);
} else {
    console.log("ERRO! Não consegui identificar a quantidade de XP do seu Herói, tente novamente por favor!");
}