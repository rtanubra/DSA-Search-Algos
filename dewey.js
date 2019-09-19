const {binarySearch} = require('./searches')

const deweyNumbers = [
    90.3,100.1,100.2,501,502,
    511,513,691
    ]
const deweyBookTitle = [
    "some random rare book","Phylosophy of stuff","Phylosophy of other stuff","Science for dummies","Science of eggs",
    "first book of math",'second book of math',
    "build my technology"
    ] 
//can also be implemented using an array of JS objects

/**
 * Imagine you are looking for a book in a library with a Dewey Decimal index. 
 * How would you go about it? 
 * Can you express this process as a search algorithm? 
 * Implement your algorithm to find a book whose Dewey and book title is provided.
 */

function deweySearch(myDewey, myTitle){
    const myIndex = binarySearch(deweyNumbers,myDewey)[1]
    return myIndex
}
d1 = 90.3
b1 = "some random rare book"
d2 = deweyNumbers[4]
b2 = deweyBookTitle[4]
d3 = 10000
b3 = "not there"
console.log(`Given ${d1}- ${b1} Should return 0 ** result is:  ${deweySearch(d1,b1)}`)
console.log(`Given ${d2}- ${b2} Should return 4 ** result is:  ${deweySearch(d2,b2)}`)
console.log(`Given ${d3}- ${b3} Should return -1 ** result is:  ${deweySearch(d3,b3)}`)