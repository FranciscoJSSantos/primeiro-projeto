var minhaVar = 'minha variavel'; //declaracao de uma varial qualquer em javascript puro
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou Es2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; });
//mesmo codigo da linha 11 e 12 so que com ES15
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
