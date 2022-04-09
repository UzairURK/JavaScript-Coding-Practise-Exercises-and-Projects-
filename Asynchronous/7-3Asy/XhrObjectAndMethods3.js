document.querySelector("#button").addEventListener('click', loadata);

function loadata() {
// const loadata = () => {
    const xhr = new XMLHttpRequest(); // create XHMLHttpRequest() object

    // for load data i.e spinner tells us that data is being processed

    xhr.onprogress = function() {
        console.log('Ready State: ' +xhr.readyState);
    }
    xhr.open('GET', 'data.txt', true); // true implies that data is being fetched asynchronously
    xhr.onload = function() {
        console.log(`ReadyState: ${xhr.readyState}`);

        if ( this.status === 200 ) {
            console.log(this.responseText)
        }
    }

    // when something gone wrong
    xhr.onerror = function() {
        console.log('Error...');
    }


    xhr.send(); // send data
}

