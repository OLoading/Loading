const input = require('readline-sync').question;

// for (i = 100; i >= 50; i--){
//     i--
//     console.log(i)
// }

// for (i = 100; i >= 50; i--){
//     if(i%2==1){

//         console.log(i)
//     }
// }

var a = parseInt(input("digite um numero: "))
var n = a


for(i=0;i <=n;i++){
    console.log() 
    console.log("n = ", n) 
    console.log("a = ", a) 
    console.log() 

    n = n + (a-1) 

    if (a==1){
        break
    }
    a--
}