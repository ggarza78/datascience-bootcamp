// @TODO: Complete the following sections to create a lottery number generator.


// Create an empty array to add the numbers.
let powerBallNumbers = [];

// Create a for loop to generate 5 random numbers between 1 and 59.
for (let i = 0; i < 5; i++) {
    const ball = Math.floor(Math.random() *59) + 1;
    powerBallNumbers.push(ball)
}

//  Check your numbers.
console.log(powerBallNumbers);

//Bonus: Add a 6th number to the array between 1 and 35.
const multiplierBall = Math.floor(Math.random() *35) + 1
powerBallNumbers.push(multiplierBall)
//  Check your numbers.
console.log(powerBallNumbers);


//  Additional bonus.
// How would you generate the random numbers using python?
