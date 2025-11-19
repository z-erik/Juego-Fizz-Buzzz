
let Fiz=0;

let Buzz=0;

let FizzBuzz=0;

for(i=1;i<=1000;i++){

    if(i%3==0 && i%5==0){
    console.log("FizzBuzz");
    FizzBuzz++;
    }
    else if(i%3==0){
       console.log("Fizz"); 
       Fiz++;
    }
    else if(i%5==0){
       console.log("Buzz"); 
       Buzz++;
    }else{
        console.log(i);
    }



}

console.log("|Total FizzBuzz "+FizzBuzz+ "| Total Fizz "+Fiz+ " |Total Buzz "+Buzz)