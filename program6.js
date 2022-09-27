let found=false;
let userInput=2
while(!found){
    let random=parseInt(Math.random()*10);
    console.log(random);
    if(+userInput==random){
        console.log("you win")
       found=true;
    }
}