const {linearSearch, binarySearch} = require('./searches')

console.log(binarySearch([1,2,3,4,7,8,9,10],5))

// 8 length so 4 index - 7: 5 is smaller than 7
    //start = 0 end = 3
// index = 1 : 5 is larger than 2 therefore look right
    //start 4 end 3