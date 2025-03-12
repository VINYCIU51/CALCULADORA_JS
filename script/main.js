import { atualizarResultado } from "./display.js";
import { adicionarDigito } from "./input.js";
import { calcular } from "./operations.js";

const resultado = document.querySelector(".result");
const botoes = document.querySelectorAll(".buttons button");

let numeroAtual = "";
let primeiroOperando = null;
let operador = null;
let reiniciar = false;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.innerText;
        if (!isNaN(valor) || valor === ",") {
            numeroAtual = adicionarDigito(valor, numeroAtual, reiniciar, atualizarResultado, resultado);
        } else if (["+", "-", "x", "/"].includes(valor)) {
            primeiroOperando = parseFloat(numeroAtual.replace(",", "."));
            operador = valor;
            reiniciar = true;
        } else if (valor === "=") {
            numeroAtual = calcular(primeiroOperando, operador, numeroAtual);
            atualizarResultado(resultado, numeroAtual);
            reiniciar = true;
        } else if (valor === "C") {
            numeroAtual = "";
            primeiroOperando = null;
            operador = null;
            atualizarResultado(resultado, numeroAtual, true);
        }
    });
});