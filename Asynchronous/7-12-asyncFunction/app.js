async function myfunc() { // async returns promises
    // return 'hello';
    const mypromise = new Promise( (resolve, reject) => {
        setTimeout( () => resolve('Hello'), 1000 ); // we are calling reolve('Hello')
    });
    const error = false;

    if(!error) {
        const res = await mypromise; // wait until promise is resolved for 1 second. waits for the promise to settle and yields its value.
        return res;
    }
    else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

    myfunc()
        .then(res => console.log(res)) // res is what the above function returning
        .catch(err => console.log(err));

 
async function getusers() {
    // await response of the fetch call
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );

    const data = await response.json(); // convert to json.Or gives an other promise

    return data;

}

    getusers()
        .then(res => console.log(res))
        
