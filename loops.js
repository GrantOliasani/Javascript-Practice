var bills = [1,1,5,10,20];
var total=0;

for (let i = 0; i < bills.length; i++) {
   if(bills[i] < 5){
    continue;
   }
   else{
    total = total+bills[i];
   }
    
    
}

console.log(total);