function Segitiga(a, t) {
this.alas = a;
this.tinggi = t;
}
Segitiga.prototype.luas = function () {
return this.alas * this.tinggi / 2;
}

var obj = new Segitiga(4, 5);
console.log(`Sebelum nilai properti diubah`);
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas\t: ${obj.luas()}`);

obj.alas = 10;
obj.tinggi = 8;
console.log(`\nSetelah nilai properti diubah`);
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas\t: ${obj.luas()}`);
