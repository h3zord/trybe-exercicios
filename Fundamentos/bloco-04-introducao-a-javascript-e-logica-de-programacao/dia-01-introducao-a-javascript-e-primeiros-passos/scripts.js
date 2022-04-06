const a = 50;
const b = 25;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


const c = 99;
const d = 150;

if (c > d) {
    console.log(c)
}

else if (d > c) {
    console.log(d)
}

const e = 60;
const f = 80;
const g = 100;

if (e > f && e > g) {
    console.log(e)
}

else if (f > e && f > g) {
    console.log(f)
}

else if (g > e && g > f) {
    console.log(g)
}

const h = -85;

if (h > 0) {
    console.log("positive")
}

else if (h < 0) {
    console.log("negative")
}

const i = 45;
const j = 90;
const k = 45;

if (i + j + k == 180 ) {
    console.log(true)
}

else if (i + j + k != 180) {
    console.log(false)
}

else if (i < 0 || j < 0 || k < 0) {
    console.log("Angulo inválido")
}

const nota = 60;

if (nota >= 90) {
    console.log("A")
}

else if (nota >= 80) {
    console.log("B")
}

else if (nota >= 70) {
    console.log("C")
}

else if (nota >= 60) {
    console.log("D")
}

else if (nota >= 50) {
    console.log("E")
}

else if (nota < 50) {
    console.log("F")
}