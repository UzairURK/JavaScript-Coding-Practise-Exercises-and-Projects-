// 9.2 Making Promises


const loadimage = (url) => {

    return new Promise( (resolve, reject) => { // in promises we only function in that function we pass two arguments. resolve refers to the 'then' and catch refers to the catch
        const request = new XMLHttpRequest();
        const callback = () => {
            if( request.status === 200 ) {

            const blob = new Blob([request.response], { type: 'image/jpg' })
            const img = document.createElement('img');
            img.src = URL.createObjectURL(blob);
            resolve(img); // call resolve function. Or when ready

            } // end of if
            else {
                reject(`${request.status}: ${request.statusText}`);
            }
            
        } // end of callback

        request.open('GET', url);
        request.responseType = 'blob';
        request.addEventListener('load', callback);
        request.addEventListener('error', event => reject(Error('Network Error')));
        request.send();

    } ); // end of Promise
  
  
    
} // end of loadimage


// loadimage('Images/download.jpg')
//     .then( img => { // making the body of resolve
//         const imgdiv = document.getElementById('images')
//         imgdiv.appendChild(img);
//     } ) 
//     .catch( function(err) {
//         console.log(err);
//     } )

   // ---------------------------9.5 Promise Chaining-----------------------------
    // series of promises i.e to show two images or more than two images
    // loadimage('Images/download-2.jpg')
    // .then( img => { // making the body of resolve
    //     const imgdiv = document.getElementById('images')
    //     imgdiv.appendChild(img);
    // } ) 
    // .then(() => loadimage('Images/download.jpg') ) 
    /* the second call to loadImage happens right after the first, without waiting for the first promise to settle.it gives an other promise, it's result is an other promise, so to process that result we have to call 'then' method once again*/ 

    // .then( img => { // making the body of resolve
    //     const imgdiv = document.getElementById('images')
    //     imgdiv.appendChild(img);
    // } ) 
    // .catch( function(err) {
    //     console.log(err);
    // } )

//9.8 Racing Multiple Promises: When you have multiple promises and you want them all resolved, you can place them into an array or any iterable, and call Promise.all(iterable).The Promise.all does not actually run tasks in parallel. All tasks are executed sequentially in a single thread. However, the order in which they are scheduled is not predictable. For example, in the image loading example, you don’t know which image data arrives first
const promises = [
  loadimage('Images/download.jpg'),
  loadimage('Images/download-2.jpg')
]
Promise.all(promises)
.then( images => {
    const imgdiv = document.getElementById('images')
    for( const img of images )
    imgdiv.appendChild(img)
} )