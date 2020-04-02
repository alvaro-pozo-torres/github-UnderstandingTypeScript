function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' +num);
}

function addAndHandle(n1: number, n2: number, callBackFunction: (n3: number) => void) {
    const result = n1 + n2;
    callBackFunction(result);
}

printResult(add(10,13));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,7));

addAndHandle(40, 41, (result) => {
    console.log(result);
});