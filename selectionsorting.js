let selectionSort = (SelectedElement) => {
 for (let i = 0; i < SelectedElement.length; i++) {
   let lowestValue = SelectedElement[i];
   let indexOfLowesetValue = i;

   // min
   for (let j = i; j < SelectedElement.length; j++) {
     if (SelectedElement[j] < lowestValue) {
       lowestValue = SelectedElement[j];
       indexOfLowesetValue = j;
     }
   }

   // swap
   let temp = SelectedElement[i];
   SelectedElement[i] = SelectedElement[indexOfLowesetValue];
   SelectedElement[indexOfLowesetValue] = temp;
 }
 return SelectedElement;
};

console.log(selectionSort([10,100,1009,1109,238,3453]));
