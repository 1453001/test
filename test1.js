// Input:
let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];

const tmpNum = /^[0-9]*$/
const tmpCharacter = /^[a-zA-Z]*$/
let numArr = arr.filter(x => tmpNum.test(x))
let characterArr = arr.filter(x => tmpCharacter.test(x))
let specialCharacterArr = arr.filter(x => !tmpCharacter.test(x)&&!tmpNum.test(x))


numArr=numArr.sort((a,b)=>(a-b))
characterArr=characterArr.sort()
specialCharacterArr=specialCharacterArr.sort()

// Output:
// ["3", "4", "10", "23", "42", "63", "ABC", "adidas", "ax", "ba", "mof", ")", "["]
let output = [...numArr,...characterArr,...specialCharacterArr]
console.log('output: ', output)


// test 2
// https://app.diagrams.net/#G16ICoWDJS-ylJO7VXNFzc6PS0I5hoMY2i