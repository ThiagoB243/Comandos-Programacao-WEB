function invert(input) {
    input = document.getElementById('text').value;

    if (!input) {
        return result.innerHTML = "String Inexistente"
    } else {

        let invert = input.split("").reverse().join("");
        var result = document.getElementById('result');

        if (invert == input) {
            return result.innerHTML = "Palíndromo"
        } else {
            return result.innerHTML = "Não Palíndromo"
        }
    }
}