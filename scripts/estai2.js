function escolha() {
    let escolhaFase2 = prompt("Você escolhe a opção 1 ou a opção 2?");

    if (escolhaFase2 == 1) {
        alert("Você solta a pedra imediatamente e se afasta da janela, quando o guarda entra. “Desculpe, estava apenas cantando”. O guarda olha atentamente e diz : “vou levá-la ao Monsenhor”. Infelizmente você é levada, passa por coisas inimagináveis e, no dia seguinte, vai para a fogueira. Fim do jogo.");
        location.assign("../index.html");
    } else if (escolhaFase2 == 2) {
        alert("Você pula pela janela e cai em um monte de árvores e arbustos. Apesar da dor na costela e dos joelhos ralados, você parece estar bem para uma queda tão grande; ao fundo, consegue ouvir os guardas gritando e começa a correr pelo bosque.");
        location.assign("../personagens/estai2.html");
    } else {
        alert("Por mais que seja difícil, você deve escolher. Digite 1 ou 2 para fazer a escolha de Estai.");
        escolha();
    }

}