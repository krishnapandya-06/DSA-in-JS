// Bubble sort 
// Here time complexity is 0(n) and space complexitty 0(1)

let bubble = [50, 40, 60, 10, 1, 2]
var temp

for (let i = 0; i < bubble.length - 1; i++) {
    for (let j = 0; j < bubble.length - i; j++) {
        if (bubble[j] > bubble[j + 1]) {
            temp = bubble[j]
            bubble[j] = bubble[j + 1]
            bubble[j + 1] = temp
        }
    }
}

console.log(bubble)