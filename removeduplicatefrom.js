// time complexity O(n^2) &&& space complexity O(n)

var ogarray = [1, 2, 2, 3, 4, 5, 5, 6, 6, 2, 4, 5, 1]
var unique = []
var uniqueLength = 0

for (let i = 0; i < ogarray.length; i++) {
    let duplicate = false
    for (let j = 0; j < unique.length; j++) {
        if (ogarray[i] === unique[j]) {
            duplicate = true
            break
        }
    }
    if (!duplicate) {
        unique[uniqueLength] = ogarray[i]
        uniqueLength++
    }
}

console.log(unique)