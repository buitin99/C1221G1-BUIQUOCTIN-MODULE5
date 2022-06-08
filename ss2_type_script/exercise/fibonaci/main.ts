let fibonacis : number[] = [0,1];
let sum = 1;
for (let i = 0; i < 20; i++){
    let temp = fibonacis[i]+fibonacis[i+1];
    fibonacis.push(temp);
    sum+=fibonacis[i+2];
}
console.log(sum);