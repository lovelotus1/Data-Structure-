let arr =[];
for (let i=1 ;i <100; i++)
{
    let r=( i % 10 );
    rev=Math.floor( i / 10 );
    if ( r == rev )
    {
        console.log("Units and Tens digit of "+ i + " is same");
        arr.push(i);
    }

}

console.log("Array is "+arr);