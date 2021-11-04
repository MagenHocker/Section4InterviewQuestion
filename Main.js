/*
  ------------------------- Data Structures ----------------------------
  - Arrays
  - Stacks
  - Queues
  - Linked List
  - Trees
  - Tries
  - Graphs
  - Hash Table

  ------------------------------ Algorithms ------------------------------
  - Sorting
  - Dynamic Programming
  - BFS and DFS
  - Recursion

 */


/*
Create a function determining if two arrays have a common element

Input: Two Arrays (They have the same data type)
Output: Boolean

Examples:
[1, 2, 3, 4, 5]
[6, 7, 8, 9, 1]
Output: True

[0, 0, 0, 0, 0]
[5, 5, 5, 5, 5]
Output: false

Questions:
1.) Are they arrays? Always
2.) Do I need to know which values are common elements? or if there just exists
a pair that are common elements?
3.) How large is the array going to get? No size limit
4.) Is space or time more important? Efficient as possible
5.) Is the array sorted?

Brute Force -> O(n^2)
            -> compare every pair between lists using a nested for loop

Elegant(ish) -> HashMap
             -> Two for loops
                  1.) populate a map by looping through array1
                  2.) loop through array2 and check if map contains each value
*/

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'z'];

function containsCommonItem(arr1, arr2) {
  let map = {}
  for (let i=0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  for (let j = 0; j <arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

const bool =  containsCommonItem(array1, array2);
console.log(bool);









