let array = [
 { username: "Krishna" },
 { username: "Pandya" },
 { username: "Krishna Pandya" },
]

function result(array, target) {
 for (let name of array) {
     if (name.username === target) {
         return true
     }
 }
 return false
}

console.log(result(array, "krishna"))
console.log(result(array, "Krishna"))