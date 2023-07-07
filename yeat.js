const egoist=require ('readline-sync').question;

// l = [0,2,5,7,10,13,3,4,9]

// i = 0

// while(i < l.length){
//     if(i[l] % 2==1){
//     l[i]=l[i]*2
// }
// i++
// }

// console.log(l)


let l = [2,3,6,7,14,21]

let i = 0

let s = 0

while(i<l.length){
    s = s + l[i] 
    i++
}

console.log(s)