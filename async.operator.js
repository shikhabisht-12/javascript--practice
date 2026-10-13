//sync - using order wise
//async - using unorderd wise 
console.log("sync operation1");
console.log("sync operation2");
console.log("sync operation3");

// async operator 
console.log("async operation 1");
setTimeout(() => {
    console.log("async operation 2");
}, 2000);
//1000ms = 1second
//2000ms = 2 second
console, log("async operation 3");