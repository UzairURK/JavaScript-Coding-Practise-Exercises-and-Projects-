function factorial(x) {

     if( x < 0 ) {
            throw new Error('X must be greater than 0'); // whenever exception is thrown, javaScript immediaty stops execution
        }
    let f;
    for(f = 1; x > 1; f *= x, x--) /* empty */ ;
    return f;
        

}
    
console.log(factorial(-1) ); // => 24