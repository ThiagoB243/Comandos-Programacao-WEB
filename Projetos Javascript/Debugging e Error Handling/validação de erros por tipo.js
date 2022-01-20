function returnArray(array, numero) {

    try {

        if (!array && !numero) throw new ReferenceError("O número não foi enviado");

        if (typeof(array) != 'object') throw new TypeError("O array não é um objeto");

        if (array.length != numero) throw new RangeError("O número está do tamanho errado");

        if (numero == Number) throw new TypeError("O número não é do tipo Number");

        return array;

    } catch (e) {

        if (e instanceof RangeError) {

            console.log('RangeError!');
            console.log(e.stack);

        } else if (e instanceof ReferenceError) {

            console.log('ReferenceError!');
            console.log(e.stack);

        } else {

            console.log('Outro tipo de erro!');
            console.log(e.stack);

        }
    }
}

console.log(returnArray([1, 2, 3, 4, 5, 6], 6));