let Arr3 = [10, 200, 30, 14, 35]
let maxi = -Infinity
let secondLargest = -Infinity
for (let i = 0; i < Arr3.length; i++) {
 if (Arr3[i] > maxi) {
  secondLargest = maxi
  maxi = Arr3[i]
 } else if (Arr3[i] > secondLargest && Arr3[i] != maxi) {
  secondLargest = Arr3[i]
 }
}

console.log(secondLargest)

