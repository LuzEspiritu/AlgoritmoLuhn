for(i=0;i<newArr.length;i++)
 {
   newArr[i]=parseInt(newArr[i])
   if(i%2==0){
       pairMultiplied=newArr[i]*2;
       if(pairMultiplied>=10){
         firstValue=parseInt(pairMultiplied/10)
         secondValue=pairMultiplied%10;
         sumValues=firstValue+secondValue;
         newArr[i]=sumValues;

       }
       newArr[i]=newArr[i];

   }
  
