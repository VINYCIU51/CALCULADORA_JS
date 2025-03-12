export function calcular(primeiroOperando, operador, numeroAtual) {
    if (operador == null || primeiroOperando == null) return numeroAtual;
    let segundoOperando = parseFloat(numeroAtual.replace(",", "."));
    let resultadoValor;

    switch (operador) {
        case "+": resultadoValor = primeiroOperando + segundoOperando; break;
        case "-": resultadoValor = primeiroOperando - segundoOperando; break;
        case "x": resultadoValor = primeiroOperando * segundoOperando; break;
        case "/": resultadoValor = primeiroOperando / segundoOperando; break;
        default: return numeroAtual;
    }
    return resultadoValor.toString().replace(".", ",");
}