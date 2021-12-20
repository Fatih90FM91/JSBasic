
let sum =0;
for (let i= 1; i <=135; i++) {
    
    sum=sum +i;
    console.log("Number "+i + " Sum" + sum);


}

console.log("Totaly "+ sum);
console.log("============================================================================");
// for (let i= 1; i <=135; i++) {
    
//     if(i%2===1){
//         console.log(i);
//     }
// }
console.log("============================================================================");
let newArray =[20,23,34,45];

newArray.forEach(element => {
    
    console.log(element);
});
 console.log("============================================================================");
let x =[2,-3,10,0];

let max =x[0];

for (let i = 0; i < x.length; i++) {
   
   if(x[i]>max){
       max=x[i];
   }
    console.log(max);
}

console.log("============================================================================");

let avrg =[1,2,3];
let sum1 =0;
let y=0;

for (let i = 0; i < avrg.length; i++) {
  
    sum1 =sum1 +avrg[i];
    
    y=y+i;
    
}
console.log(sum1);
console.log(y);
console.log("result "+ sum1/y);

console.log("============================================================================");

let negativeAry=[1,-2,-4,8];
let withoutNeg=[];


for (let i = 0; i < negativeAry.length; i++) {
   
    if(negativeAry[i]<0){
      withoutNeg[i]=0;
    }else{
        withoutNeg.push(negativeAry[i]);
    }
}

console.log(withoutNeg);

console.log("============================================================================");

let newItems =[1,-2,-4,0];
let stringResult=[];

for (let i = 0; i < newItems.length; i++) {
    
    if(newItems[i] < 0){
        stringResult[i]="string";
    }else{
        stringResult.push(newItems[i]);
    }
    
}

console.log(stringResult);