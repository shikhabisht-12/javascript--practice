const promise = new Promise((resolve, reject) => {
    let marks = 85;

    setTimeout(() => {
        if (marks >= 40) {
            resolve("Congratulations! You passed.");
        } else {
            reject("Sorry! You failed.");
        }
    }, 2000);
});

console.log("Checking result...");

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Result checking completed.");
    });