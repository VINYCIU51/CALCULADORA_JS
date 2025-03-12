export function atualizarResultado(resultado, numeroAtual, limparOrigem = false) {
    resultado.innerText = limparOrigem ? 0 : numeroAtual.replace(".", ",");
}