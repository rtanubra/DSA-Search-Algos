function linearSearch(arr,item){
    for (i in arr){
        if (arr[i]===item){
            return i
        }
    }
    return -1
}

function binarySearch(arr,item){
    sortedArr = array.sort((a,b)=>{return a-b})
    
}
module.exports = {linearSearch, binarySearch}