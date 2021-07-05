//1-heranca.js
'use strict';

function Pessoa(name) {
	this.name = name;
}

const p = new Pessoa('Daniel');

//tipo Pessoa
console.log(p);


//exemplo simples de herança, onde um construtor chama o outro
function Animal() {}

Animal.prototype.qtdePatas = 0
Animal.prototype.movimentart = function() {}

function Cachorro(morde) {
	this.qtdePatas = 4
	this.morde = morde
}

Cachorro.prototype = Object.create(Animal)
Cachorro.prototype.latir = function() {
	console.log('Au! au!')
}

const pug = new Cachorro(false)
const pitbull = new Cachorro(true)



