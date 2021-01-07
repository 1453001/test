// Input:
// 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options'

// Output:
// Matched Words: '132cxvx, mic7979, m98opt'
// Variations with '-' character: '132-cxvx, mic-7979, m-98opt, m-98-opt, m98-opt'


function generateStates(n){
    let states = [];
    // Convert to decimal
    let maxDecimal = parseInt("1".repeat(n),2);
    // For every number between 0->decimal
    for(let i = 0; i <= maxDecimal; i++) {
        // Convert to binary, pad with 0, and add to final results
        states.push(i.toString(2).padStart(n,'0'));
    }
    states.shift()
    return states;
}

function creatVariableWord(str) {
    let splitArr = str.match(/[a-z]+|[^a-z]+/gi);
    let binaryState = generateStates(splitArr.length-1)
    let variableArr = []
    let tmpStr = ''
    for (let i = 0; i < binaryState.length; i++) {
        tmpStr = splitArr[0]
        for(let j = 0; j < binaryState[i].length; j++) {
            tmpStr = tmpStr + (binaryState[i][j] === '1' ? '-' : '') + splitArr[j+1]
        }
        variableArr.push(tmpStr)
    }
    return variableArr
}
// Input:
let str = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options'
let arr = str.split(' ');
var resultArr = []

const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/
let mixWordArr = arr.filter(x => regex.test(x))

for (let i = 0; i < mixWordArr.length; i++) {
    let tmpArr = []
    tmpArr = creatVariableWord(mixWordArr[i])
    resultArr = [...resultArr, ...tmpArr]
}

// Output:
console.log('Matched Words: ', mixWordArr.join(', '))
console.log("Variations with '-' character: ", resultArr.join(', '))
