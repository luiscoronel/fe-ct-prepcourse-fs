var num = [52, 54, 56, 58, 60, 62, 64, 66, 68];
var element = [];
   
function arreglo(num){
for (let index = 0; index < 10; index++){
      element[index] = num[index] + 2;
      console.log(element[index]);
      if (element[index] == index) {
         return 'Si interrumpió la ejecución';
         break;
      }
         
}
return element;
}
   
