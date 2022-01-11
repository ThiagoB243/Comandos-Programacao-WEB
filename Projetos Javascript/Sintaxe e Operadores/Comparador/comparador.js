function comparador(num1, num2) {
    var resposta = "";
    if (num1 == num2) {
        resposta += "Os números 1 e 2 são iguais.";
    } else {
        resposta += "Os números 1 e 2 não são iguais.";
    }

    var soma = num1 + num2;

    resposta += " Sua soma é igual a " + soma;

    if (soma > 10) {
        resposta += " que é maior que 10";
    } else {
        resposta += " que é menor que 10";
    }

    if (soma > 20) {
        resposta += " e que é maior que 20.";
    } else {
        resposta += " e que é menor que 20.";
    }

    return resposta;
}