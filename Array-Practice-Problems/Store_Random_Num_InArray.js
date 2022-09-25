let a = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random1 "+a);
let b = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random2 "+b);
let c = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random3 "+c);
let d = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random4 "+d);
let e = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random5 "+e);
let f = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random6 "+f);
let g = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random7 "+g);
let h = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random8 "+h);
let i = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random9 "+i);
let j = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random10 "+j);

const array=[a, b, c, d, e, f, g, h, i, j];

let largestNumber = array[0];
let smallestNumber = array[0];
let secondLargestNumber = array[0];
let secondSmallestNumber = array[0];
for (let i=0; i<array.length; i++){
if(array[i] > largestNumber){
    secondLargestNumber =largestNumber;
    largestNumber = array[i];
}else if (array[i] > secondLargestNumber && array[i]!=largestNumber ){
    secondLargestNumber = array[i];
}
}
console.log("Largest Number ->" +largestNumber);

console.log ("Second Largest Number ->" +secondLargestNumber);

for (let j=0; j<array.length; j++){
    if(array[j] <smallestNumber){
        secondSmallestNumber =smallestNumber;
        smallestNumber = array[j];
    }else if (array[j] < secondSmallestNumber){
        secondSmallestNumber = array[j];
    }
    }
    console.log("Smallest Number ->" +smallestNumber);
    
    console.log ("Second Smallest Number ->" +secondSmallestNumber);