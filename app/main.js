// captura o botão que vai dar início
const botao = document.getElementById('botao')
// captura a palavra digitada
const palavra = document.getElementById('palavra')

// onde eu coloco a ação de verificar no botão
botao.addEventListener('click', (evento)=>{
    // pre evitar que suma da tela a mensagem
    evento.preventDefault()
    // função que verifica se a palavra é palíndromo 
    verificaSeAPalavraEUmPalindromo(palavra.value)
})