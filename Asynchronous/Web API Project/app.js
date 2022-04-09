// Instantiate Github
const github = new Github;
// Instantiate UI
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
    
    github.getUsers(userText)
    // make http call
    .then( (data) => { // returns the promise i.e data refers to the 'profile' which getUsers returns

        if( data.profile.message === 'Not Found' ) {
        // show alert
            console.log('Not Found');
            // setTimeout(ui.showAlert('User Not Found', 'alert alert-danger'),2000);
            ui.showAlert('User Not Found', 'alert alert-danger'); // showAlert method 

        } // end of if
        else {
        // show data
        // console.log(data) 
        ui.showprofile(data.profile); // profile is object which is coming from  getUsers method.profile of data  
        
        // show repos
        ui.showRepos(data.repos);

        } // end of else
        
    } );

    }
    else {
        // clear profile
        ui.clearProfile(); // call clrearprofile method
    }    
});