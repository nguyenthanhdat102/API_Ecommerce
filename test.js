const x1 = [
   8.5, 8.8, 4.8, 9.6, 5.2, 5.6, 11.4, 11.9, 7.4, 13.1, 4.1, 4.3, 9.3, 4.9,
   10.2, 10.7, 6.1, 6.8, 12.5, 7.9,
];

const x2 = [
   6.1, 6.3, 4.5, 6.8, 4.8, 5.1, 7.4, 7.6, 5.7, 8.1, 4.3, 4.3, 6.6, 4.5, 6.9,
   7.2, 5.3, 5.5, 7.9, 5.9,
];

const x3 = [
   17, 16, 21, 15, 20, 20, 12, 11, 19, 10, 22, 22, 16, 21, 14, 13, 20, 19, 11,
   18,
];

console.log({ x1: x1.length, x2: x2.length, x3: x3.length });

let total = 0;
let temp = [];

for (let i = 0; i < 20; i++) {
   let row = x2[i] * x3[i];
   temp.push(row);
}

total = temp.reduce((total, item) => {
   return total + item;
}, 0);

console.log(total);
