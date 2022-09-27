let number=23617;
 let sum=0;
 while(number>0){
     sum+=((number%10)%2==0?number%10:0);
     number=parseInt(number/10);


 }
 console.log(sum);