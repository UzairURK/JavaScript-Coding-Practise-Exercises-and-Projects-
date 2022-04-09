document.querySelector(".button").addEventListener('click', loaddata);

function loaddata( e ) {
    const number = document.getElementById("number").value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function() {
        // console.log(this.readyState);

    }
    
    xhr.onload = function() {

        if( this.status === 200 ) {
            // const li = document.createElement('li');
            // console.log(JSON.parse(xhr.responseText));
            const response = JSON.parse(this.responseText);
            let output = '';
            response.value.forEach( (res) =>  { // BE carefull we are not going to loop response cuz response is an object has many attributes so we would loop only the values of response which contain json string that's why we are using 'response.value.forEach(function(joke)' instead of 'response.forEach(function(joke)' but sometime we use later also It depends of on External API on how it is formated. Every External API has different method to be fetched. Rembeber diferent API has differnt Rules.
                const li = document.createElement('li'); // create li tag
                li.appendChild(document.createTextNode(`${res.joke}`))
                // output += `<li> ${res.joke} </li>`;
                // output += li;
                document.querySelector('.jokes').appendChild(li);
            } );
        //    document.querySelector('.jokes').innerHTML = output; 
        }
    }
    xhr.send();
    e.preventDefault();
}