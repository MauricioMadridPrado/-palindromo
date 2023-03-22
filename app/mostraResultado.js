// captura o local onde vou por o resultado
const ondeVaiMostrarOResultado = document.getElementById('resultado')
// se for verdadeiro, faz isso
function mostraResultadoVerdade(texto) {
    // local onde vou por texto . comando de por texto
    ondeVaiMostrarOResultado.innerHTML =
        // texto
        `        
        <section class="resultado__container verdade">
            <h2 class="resultado__texto">${texto}</h2>
        </section>
    `
}
function mostraResultadoFalso(texto) {
    // local onde vou por texto . comando de por texto
    ondeVaiMostrarOResultado.innerHTML =
        // texto
        `        
        <section class="resultado__container falso">
            <h2 class="resultado__texto">${texto}</h2>
        </section>
    `
}