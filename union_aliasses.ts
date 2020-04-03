// function add(n1: number, n2: number){
//     const result = n1 + n2;
//     return result;
// }
type Combinable = number | string;
type ConversionDescriptor = 'as-string' | 'as-number';

function combine(
    input1: Combinable,
    input2: Combinable,
    resulttype: ConversionDescriptor
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString()+ ' ' + input2.toString();
    }

    if (resulttype === 'as-string'){
        return result.toString();
    } else {
        return +result;
    }
}

const combinedAges = combine (30, 36, 'as-number');
console.log(combinedAges);

const combinedNames = combine ('Alvaro', 'Pozo', 'as-string');
console.log(combinedNames);