let myMap = new Map();
for (let i = 1; i<500; i++){
    let x=(Math.floor(Math.random() * 6 + 1));
    if(myMap.has(x)){
        let num=myMap.get(x)+1;
        myMap.set(x,num);
                if(num===10){
                    console.log(x+" has occured 10 times");
                    break;
                }
    }else{
        myMap.set(x,1);
    }
}

const mapSort = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
console.log("Highest occured number is "+Array.from(mapSort)[0][0]+" with times "+Array.from(mapSort)[0][1]);
console.log("Lowest occured number is "+Array.from(mapSort)[Array.from(mapSort).length-1][0]+" with times "+Array.from(mapSort)[Array.from(mapSort).length-1][1]);