function linearSearch(arr,item){
    for (const i in arr){
        if (arr[i]===item){
            return i
        }
    }
    return -1
}

function binarySearch(array,value){
    var sortedArr = array.sort((a,b)=>{return a-b})
    for (const i in array){
        if (array[i] !== sortedArr[i]){
            return `Error provided a non sorted array`
        }
    }
    var counter = 0 
    var indexFinal = -1
    function binarySearchHelper(array, value, start, end) {
        var start = start === undefined ? 0 : start;
        var end = end === undefined ? array.length : end;

        if (start > end) {
            indexFinal = -1 ;
        }
        else{
            const index = Math.floor((start + end) / 2);
            const item = array[index];
            if (item == value) {
                counter +=1
                indexFinal= index;
            }
            else if (item < value) {
                counter +=1
                return binarySearchHelper(array, value, index + 1, end);
            }
            else if (item > value) {
                counter +=1
                return binarySearchHelper(array, value, start, index - 1);
            }
        }
    };
    binarySearchHelper(sortedArr,value)
    return [counter,indexFinal]
}
module.exports = {linearSearch, binarySearch}