const arr = [];
for (let i = 0; i < 100000000; i++) {
  arr.push(i);
  arr.splice(i % 3, i % 7, i % 5);
}
console.log(1111);