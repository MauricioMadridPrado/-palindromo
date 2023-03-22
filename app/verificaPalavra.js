// função que verifica se a palavra é um palindromo
function verificaSeAPalavraEUmPalindromo(palavra) {
    // separa a palavra por letras
    let palavraSeparadaPorLetra = palavra.split("")
    // inverte as letras da palavra
    let palavraInvertida = palavraSeparadaPorLetra.reverse("")
    // junta a palavra novamnet
    palavraInvertida = palavraInvertida.join("")
    // operador ternario pra ver se elas são iguais ou não
    const eOuNaoE = (palavra == palavraInvertida) ? mostraResultadoVerdade(`${palavra} é um palindromo!`) :mostraResultadoFalso(`${palavra} não é palindromo!`)
}