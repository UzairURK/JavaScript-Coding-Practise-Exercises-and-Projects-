const http = new easyHttp; //we are instantiating 

// get
// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(posts);
//         const posts1 = JSON.parse(posts);
//         let output = '';
//         posts1.forEach( (post) => {
//             output += `<li> ${post.title} </li>`
//         } );
//         document.body.innerHTML = output;
//     }  
// });

const data = {
    title: 'This is title',
    body: 'this is body'
};

// update data
// http.post('https://jsonplaceholder.typicode.com/posts', data, (err, posts) => {
//     if(err) {
//         console.log(err, posts);
//     }
//     else {
//         console.log(posts);
//     }
// });

// delte post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

