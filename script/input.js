export function adicionarDigito(digito, numeroAtual, reiniciar, atualizarResultado, resultado) {
    if (digito == "," && (numeroAtual.includes(",") || numeroAtual === "")) {
        return numeroAtual;
    }

    if (reiniciar) {
        numeroAtual = digito;
        reiniciar = false;
    } else {
        numeroAtual += digito;
    }

    atualizarResultado(resultado, numeroAtual);
    return numeroAtual;
}