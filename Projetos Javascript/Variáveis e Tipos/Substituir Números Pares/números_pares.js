function verificar() {
    var result = document.getElementById('result');
    var input = document.querySelector('input').value;
    var total = "";


    for (var i = 0; input.length > i; i++) {
        var check = input[i] % 2;
        if (input[i] == 0) {
            total += " /número zero/ ";
        } else if (check == 0) {
            total += " /número par/ ";
        } else {
            total += " /número impar/ ";
        }
    }

    result.innerHTML = total;

}