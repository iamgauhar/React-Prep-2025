
const arr = [1, 2, 3, 5, 7]

const modArr = arr.map((num, i)=>{
    return num*2
})

console.log(modArr);

Array.prototype.myMap = function (cb){
    let temp = []
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp
}

Array.prototype.myFilter = function (cb){
    let temp = []
    for(let i=0; i<this.length; i++){
       if(cb(this[i], i, this))  temp.push(this[i])
    }
    return temp
}

const arr2 = arr.myFilter((num, i)=>{
    return num>2
})

console.log(arr2)