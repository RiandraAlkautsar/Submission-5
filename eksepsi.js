var readline = require (`readline-sync`);

class DivisionByZeroError extends Error {
constructor (msg) {
super(msg); 
this.name = this.constructor.name
this.message = msg;
}
getMessage() {
return this.message;
}
}

var a = parseFloat(readline.question("Masukan nilai a: "));
var b = parseFloat(readline.question("Masukan nilai b: "));

try {
if (b == 0) {
throw new DivisionByZeroError("KESALAHAN: Terjadi pembagian dengan nol");
}


var c = a / b;
console.log (`${a} / ${b} = ${c}`);
}catch (e) {
console.log (e.getMessage());
}

