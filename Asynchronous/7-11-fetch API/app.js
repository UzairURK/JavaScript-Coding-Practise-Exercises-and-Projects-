document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// get local text data
function getText() {
    fetch('text.txt')
       .then((res) => res.text())
       .then( (data) => {
           console.log(data);
           document.getElementById('output').innerHTML = data;
       })
       .catch((err) => {
           console.log(err);
       });
}

// get local json data
function getJson() {
    fetch('data.json')
       .then(res => res.json())
       .then( post => {
        console.log(post);
        let output = '';
        post.forEach(data => {
            output += `<li> ${data.title} </li>`;
        })
        document.getElementById('output').innerHTML = output;
       });
}

// get External Data

function getExternal() {
    fetch('https://api.github.com/users') // it givs a promise i.e response,  so to process that promise we have to call then method once again.
       .then(res => res.json()) // it gives an other promise  i.e json() array, so to process that promise we have to call then method once again.
       .then(data => {
           let output = '';
           data.forEach(user => {
               output += `<li> ${user.login}</li>`;
           });
           document.getElementById('output').innerHTML = output;
       });
}