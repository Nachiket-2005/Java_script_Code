let sum = 0
let n = prompt("Enter The Num : ")
n = Number.parseInt(n)
for(let i=0;i<n;i++){
  sum += (i+1)
}
console.log(" Sum of first "+ n +" Natural Num " + sum)
