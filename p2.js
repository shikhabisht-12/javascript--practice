const arr = [23, 24, 25, 26, 17]
console.log(arr[2]);
// using the var and let in array 
let arr1 = ['apple', 'banana', 'mango']
// so i wanted to print the array number for using the array statement 
console.log(arr1[3]);
 
array .js
const fruits = ['apple', 'bananna', 'mango'];
console.log(fruits[1]);
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums.pop();
console.log(nums);

//maps () creates a new array by applying a function to each element 
const squared = nums.map((num) => num * num);
console.log(squared);
// filter element based on a condition 
const ages = [18, 29, 24, 20];
const adults = ages.filter(age => age >= 18);
console.log(adults);
