let Arr1 = [10,20,30,30,40,50,50,60,70,70]
let count = {} // 
for(let i = 0 ; i <Arr1.length ; i++) 
{
    if(!count[Arr1[i]]){
        count[Arr1[i]] = 1
    }else{
        count[Arr1[i]]++
    }
}
for(let key in count)
 {
     console.log(key+ " : " + count[key])
 }