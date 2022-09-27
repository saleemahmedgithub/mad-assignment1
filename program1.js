let number=23617
let k=4
while(k>1){
    number = parseInt(number/10);
    k-=1;
    console.log(number);
}
console.log("result:",number%10);