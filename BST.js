/**
 * https://www.youtube.com/watch?v=eL8NZ-21lqI
 * 1) Given a binary search tree whose in-order and pre-order 
 * traversals are respectively 
 * 14 15 19 25 27 35 79 89 90 91 and 
 * 35 25 15 14 19 27 89 79 91 90. 
 * What would be its postorder traversal?
 * Possible pre-order (PLR) -- more accurate fits also LPR
 *                 35
 *          25            89
 *     15       27    79      91
 * 14      19              90
 *     
 * Post Order (LRP)  
 * 14 , 19 ,15 , 27, 25, 79, 90, 91, 89, 35
 * 
 * 2) The post order traversal of a binary search tree is 
 * 5 7 6 9 11 10 8. What is its pre-order traversal?
 * Possible post order (LRP)
 *          8       
 *     6       10
 * 5      7        11     
 * 
 * Pre Order (PLR)
 * 8,6,5,7,10,11
 */

const {_Node,Queue} = require('./queue')

function preOrder(node,values=[]){
    values.push(node.value);
    if (node.left){
        values = preOrder(node.left,values)
    }
    if(node.right){
        values = preOrder(node.right,values)
    }
    return values
}

function inOrder(node,values=[]){
    if (node.left) {
            values = inOrder(node.left,values);
        }
    values.push(node.value);

    if (node.right) {
            values = inOrder(node.right,values);
        }
    return values;
}
function postOrder(node,values=[]){
    if (node.left) {
            values = postOrder(node.left,values);
    }
    if (node.right) {
            values = postOrder(node.right,values);
    }
    values.push(node.value);
    return values
}
const {BinarySearchTree} =  require('./BST_own')
const myTree1 = new BinarySearchTree()
const items1 = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
for (const i in items1){
    myTree1.insert(items1[i],items1[i])
}

// console.log(inOrder(myTree1))
// console.log(postOrder(myTree1))
// console.log(preOrder(myTree1))


function nextCommandingOffice(firstNode,values=[]){
    /**
     * The order of the Commanding officers is Bredth of first Search
     * 
     */
    const queue = new Queue();
    queue.enqueue(firstNode)
    
    while (queue.first){
        //take off first node
        const node = queue.dequeue()
        values.push(node.value)
        
        if(node.right){
            queue.enqueue(node.right)
        }
        if(node.left){
            queue.enqueue(node.left)
        }
    }
    
    return values
}
const tree2 = new BinarySearchTree()
const items2 = [30,15,50,10,20,55,5,52]
const values2 = ["Captain Picard", "Commander Riker", "Commander Data", "LT Cmdr Worf", "Lt Cmdr LaForge", "Lt Cmdr Crusher", "Lieutenant security office","Lietenant Selar"]

for (const i in items2){
    tree2.insert(items2[i],values2[i])
}


console.log(nextCommandingOffice(tree2))


