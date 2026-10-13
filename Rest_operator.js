//rest operators - collects remaining element into an array or object
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
const fruits = ['apple', "banana", "cheery", "data"];
const [first, second, ...remainingfruits] = fruits;
console.log(first);
console.log(second);
console.log(remainingfruits);g