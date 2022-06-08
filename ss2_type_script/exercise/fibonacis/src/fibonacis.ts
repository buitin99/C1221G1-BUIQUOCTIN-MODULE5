// happy coding 👻
let f0 : number = 0;
let fn : number = 1;
let fibonaci : number;
let arrFibonaci : number[] = [];
let sum : number = 0;

function fibonacis(count: number, total: number):void {
    if (count < total){
        if (count <= 1){
            arrFibonaci.push(count);
        }else
        {
            fibonaci = f0+fn;
            f0 = fn;
            fn = fibonaci;
            arrFibonaci.push(fibonaci);
        }
        count++;
        fibonacis(count,total);
    }else{
       return;
    }
}
fibonacis(0,20);
arrFibonaci.forEach(element => {
    sum+= element;
})
console.log("Tổng fibonaci là:" + sum);

