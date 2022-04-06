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

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
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

else if (nota < 0 || nota > 100) {
    console.log("Nota inválida")
}

const l = 5;
const m = 10;
const n = 15;

if (l % 2 == 0 || m % 2 == 0 || n % 2 == 0) {
    console.log("true")
} else {
    console.log("false")
}

const o = 2
const p = 4
const q = 6

if (o % 2 != 0 || p % 2 != 0 || q % 2 != 0) {
    console.log("true")
} else {
    console.log("false")
}

const custo = 100
const venda = 150
const unidades = 1000
const custoTotal = custo * 1.2 * unidades
const valorVenda = venda * unidades

switch (unidades) {
    case 1000:
        console.log(valorVenda - custoTotal);
        break;    
}




