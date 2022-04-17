function escolha() {
    let escolhaFase1 = prompt("Você escolhe a opção 1 ou a opção 2?");

    if (escolhaFase1 == 1) {
        alert("Você busca se soltar dos guardas e consegue pisar no pé de um deles, se soltando brevemente. O Monsenhor grita para que lhe segurem, no que você leva um soco, cai e jogam um saco de pano sobre sua cabeça. Quando vocẽ acorda, está amarrada a um tronco e prestes a ser queimada. Fim do jogo.");
        location.assign("../index.html");
    } else if (escolhaFase1 == 2) {
        alert("Você se aquieta e diz para um dos guardas que não precisa lhe segurar, você seguirá andando. Com certeza deve haver algum engano; você respira e segue, seja lá para onde esteja indo.");
        location.assign("../personagens/estai2.html");
    } else {
        alert("Por mais que seja difícil, você deve escolher. Digite 1 ou 2 para fazer a escolha de Estai.");
        escolha();
    }

}