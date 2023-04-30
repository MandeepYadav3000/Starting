function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult1(num: number): void {
    console.log("Result is : " + num);
}

function addAndHandle(n1:number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult1(add(10,10));


let combineValues :(a: number, b:number) => number;

combineValues = add;

console.log(combineValues(10,20));

addAndHandle(10,50,(rest) => {
    console.log(rest);
});