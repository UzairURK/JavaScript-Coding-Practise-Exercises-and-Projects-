document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest(); // make XMLHttpRequest()

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true); // get 

  xhr.onload = function() { // onload function
    if(this.status === 200) {
      const response = JSON.parse(this.responseText); // covert to json string
      console.log(response)
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){ // BE carefull we are not going to loop response cuz response is an object has many attributes so we would loop only the values of response which contain json string that's why we are using 'response.value.forEach(function(joke)' instead of 'response.forEach(function(joke)' but sometime we use later also It depends of on External API on how it is formated. Every External API has different method to be fetched. Rembeber diferent API has differnt Rules.
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}