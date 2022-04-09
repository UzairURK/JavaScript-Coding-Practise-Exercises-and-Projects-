// Odd Number from x to z.
function iterationRange( start = 0, end = infinity, step = 1 ) {
    let nextIndex = start;
    let iterationcount = 0;

    const rangeIterator = {
        next: function() {
            let result;
            if( nextIndex < end ) {
                result = {value: nextIndex, done: false}
                nextIndex += step;
                iterationcount++;
                return result;
            }
            return {value: iterationcount, done: true} // give us iterationcount which is as size
        }
    };
    return rangeIterator;
}

// call above function
const it = iterationRange(1, 10, 2);
let result = it.next();
while(!result.done) {
    // console.log(result.value);
    result = it.next();
}

// console.log("Iteration over sequence of size: ", result.value );


// Factorial Numbers

function factorial(num) {
    let count = 1;
    let facto;
    const fact = {
        next: function(){
            
            if( count <= num ) {

                facto = {value: count, done: false};
                count += 1;
                return facto;
            }

            else {
                return {done: true}
            }

        }
} // end of fact object

    return fact; // this is must
}
let num = 4;
const ite = factorial(num) 
      let findResult = ite.next(); // first call iteration
     
      let factor = 1; 
      while(!findResult.done) {
        factor = factor * findResult.value;
        findResult = ite.next(); // call iteration 

      }
      console.log("Factorial of ",num," is ",factor);
