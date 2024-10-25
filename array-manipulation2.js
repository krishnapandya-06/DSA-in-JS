let Arr2 = [1,2,3,4,5]
let z = 2 
let rotate = []

for(let i = 0 ;i <Arr2.length ; i++)
{
    rotate[(i+z)%Arr2.length] = Arr2[i]
    console.log(rotate)

}

Arr2 = rotate

console.log(Arr2)