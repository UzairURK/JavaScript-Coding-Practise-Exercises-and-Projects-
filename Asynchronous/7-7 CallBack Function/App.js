const posts = [
 {title: 'Post: 1', body: 'This is Body 1'},
 {title: 'Post: 2', body: 'This is Body 2'},
 {title: 'Post: 3', body: 'This is Body 3'}
];

// Synxhronously
// const createPost = (post) => {
//     setTimeout( () => {
//         posts.push(post);
//     }, 2000 );
// }

// const getpost = () => {
//     setTimeout( () => {
//         let output = '';
//         posts.forEach( (post) => {
//         output += `<li> ${post.title} </li>`;
//         } );
//         document.body.innerHTML = output;
//     } ,1000)
// }

// createPost({title: 'Post: 4', body: 'This is body 4'});
// getpost();

// Asynchronously

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000) 
    
}

const getposts = () => {

    setTimeout( () => {
        let output = '';
        posts.forEach((post) => {
            output += `<li> ${post.body} </li>`
        });
        document.body.innerHTML = output;
    } ,1000)
}

createPost({title: 'Post: 4', body: 'This is body 4'}, getposts);