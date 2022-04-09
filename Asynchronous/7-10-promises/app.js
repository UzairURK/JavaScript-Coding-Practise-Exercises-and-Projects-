const posts = [
    {title: 'title 1', body: 'Body: 1'},
    {title: 'title 2', body: 'body: 2'}
];

function createPost(post) {
    return new Promise(function (resolve, reject){ // promises are alternatives to the callback function
        setTimeout(function() {
            posts.push(post);
            const err = false;
            if( !err) {
                resolve(); // as a getpost or call getposts function. Or call when ready
            }
            else {
                reject('Error: Sth wrong');
            }
        },2000);
    });
}

function getPosts() {
    setTimeout(function() {
      let output = '';
      posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  createPost({title: 'title 3', body: 'body: 1'})
  .then(getPosts) // reference to the resolve. Or It can be a callback function
  .catch(function(err){
    console.log(err);
});