let myMap = new Map();
for (let i = 1; i<=50; i++){
    let year= 1991+Math.floor(Math.random() * 2 + 1);
    let x=Math.floor(Math.random() * 12 + 1)+","+year;
    if(myMap.has(x)){
        let num=myMap.get(x)+1;
        myMap.set(x,num);
    }else{
        myMap.set(x,1);
    }
}

const mapSort = new Map([...myMap.entries()].sort((a, b) => a[0] - b[0]));
console.log(mapSort);
for (let [key, value] of mapSort) {
    let year=key.split(",")[1];
    switch(key.split(",")[0]){
        case "1":
          console.log(value+" people has birth month in January,"+year);
          break;
        case "2":
          console.log(value+" people has birth month in February,"+year);
          break;
        case "3":
          console.log(value+" people has birth month in March,"+year);
          break;
        case "4":
          console.log(value+" people has birth month in April,"+year);
          break;
        case "5":
          console.log(value+" people has birth month in May,"+year);
          break;
        case "6":
          console.log(value+" people has birth month in June,"+year);
          break;
        case "7":
          console.log(value+" people has birth month in July,"+year);
          break;
        case "8":
          console.log(value+" people has birth month in August,"+year);
          break;
        case "9":
          console.log(value+" people has birth month in September,"+year);
          break;
        case "10":
          console.log(value+" people has birth month in October,"+year);
          break;
        case "11":
          console.log(value+" people has birth month in November,"+year);
          break;
        case "12":
          console.log(value+" people has birth month in December,"+year);
          break;
    }
}