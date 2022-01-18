const um = {
    nome: 'José',
    idade: 10,
};

const dois = {
    nome: 'Maria',
    idade: 42,
};

const tres = {
    nome: 'Carlos',
    idade: 82,
};


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

calculaIdade.call(um, 9);
calculaIdade.apply(tres, [11]);