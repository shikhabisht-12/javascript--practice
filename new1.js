let student = {
    name: "Priya",
    address: {
        city: "Ghaziabad",
        state: "Uttar Pradesh"
    }
};

let {
    name,
    address: { city, state }
} = student;

console.log(name);  // Priya
console.log(city);  // Ghaziabad
console.log(state); // Uttar Pradesh