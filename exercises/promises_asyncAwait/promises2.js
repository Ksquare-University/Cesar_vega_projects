/**
 * Requirements:
 *
 *  Create a wait() function that receive a number that represents
 *  the delay time in ms.
 *
 *  Create a add() function that receives two numbers as params and
 *  return the sum of these ones.
 *    Notes:
 *      1. The params should require an special processing, so we
 *      we need to pass each one to a clean() function that emulates an async procedure
 *
 * Exercises:
 *
 *  1. Create a function getSum20 that returns a 20 as result.
 *  2. Create a function getOperation100 that returns 100 as result
 *    Notes:
 *      1. You only can use numbers between 0 and 10
 *       2. Maybe we need to a new function to help us
 *  3. This exersice have two parts:
 *    1. Lets create a function called add5() that receives a number as a param
 *       and return a sum of this one with 5
 *    2. Create a function called getSum25() that returns 25 as a result.
 *
 * Remember that all the solutions must be done using promises!! Enjoy it!
 */

// General functions

function wait(delay) {
  //sets a wait time. of course, only if we do it synchronously. (Await)
  setTimeout(function(){},delay);
}

function clean(number) {
  //Basically makes this number a promise.
  return new Promise((resolve) => setTimeout(() => resolve(number), 0));
}

async function add(x, y) {
  //Makes the two passed numbers async and waits for the operation to resolve.
  const x_ = clean(x);
  const y_ = clean(y);
  const array = await Promise.all([x_,y_]);
  let sum = array.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  })
  
  //console.log(sum);
  return sum;
}

/**
 * Exercise 1
 */

function getSum20() {
  return add(10,10);
}

getSum20();

/**
 * Exercise 2
 */

 /*
async function getOperation100() {
  let sum = 0;
  let while_count = 0;
  while(sum != 100){
    while_count += 1;
    if(100 - sum > 10){
      sum = await add(sum,10);
    } else{
      sum = await add(sum,100-sum);
    }

    if(sum > 100){
      sum = await add(sum, 100-sum);
      break;
    }
  }
  //console.log(sum);
  return sum;
}
*/

//Is this legit? Why does the previous one break the tester?
async function getOperation100() {
  let sum = 0;
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  sum = await add(sum,10);
  return sum;
}


//getOperation100();

/**
 * Exercise 3
 */

async function add5(num) {
  const sum5 = await add(num,5);
  //console.log(sum5);
  return sum5;

}


async function getSum25() {
  const sum25 = await add(20,5); //Can we do this, or we need to do it with numbers less than 10?
  return sum25;
}

module.exports = {
  getSum20,
  getOperation100,
  getSum25,
};
