class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // display profile
    showprofile(user) {
        // console.log(user);
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">  
        
        <div class = "row"> 
        
        <div class = "col-md-3"> 
        <img class = "img-fluid mb-2" src = "${user.avatar_url}">
        <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block"> View Profile </a>
        </div>
        
        <div class = "col-md-9">     
        <span class = "badge badge-primary"> Public: Repos: ${user.public_repos} </span>
        <span class = "badge badge-primary"> Public: Gists: ${user.public_gists} </span>
        <span class = "badge badge-primary"> Follwers: ${user.followers} </span>
        <span class = "badge badge-primary"> Follwoing: ${user.follwing} </span>
        <br/> <br/>
        <ul class = "list-group">
        <li class = "list-group-item">Company: ${user.company} </li>
        <li class = "list-group-item">Website/blog: ${user.blog} </li>
        <li class = "list-group-item">Location: ${user.location} </li>
        <li class = "list-group-item">Member Sincea: ${user.created_at} </li>
        </ul>  
        </div>
        </div>
        </div>

        <h3 class = "page-heading mb-3">Latest Repos </h3>
        <div id = "repos"> </div>
        `;
    }

    // show respos
    showRepos(repos) {
        // const repos1 = JSON.stringify(repos);
        let output = '';
        
        repos.forEach(function(repo) {
            output += `
            <div class = 'card card-body mb-2'> 
               <div class = "row">
                   <div class = "col md-6">
                     <a hre = "${repo.html_url}" target = "_blank"> ${repo.name} </a>
                   </div>

                   <div class = "col md-6">
                   <span class = "badge badge-primary"> Stars: ${repo.stargazers_count} </span>
                   <span class = "badge badge-primary"> watchers: ${repo.watchers_count} </span>
                   <span class = "badge badge-primary"> Forks: ${repo.forms_count} </span>
                   
                   </div>
                </div>
            </div>
            
            `;
        });
       
        /*
        let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
        
        */
        document.getElementById('repos').innerHTML = output;

    }

    // clear profile
     clearProfile (){
        this.profile.innerHTML = ''; // It sets profile to none
    }

    // show Alert. 
    // Strategy: It should apear before the search
    showAlert( message, classname ) {
        // first clear remaining alerts
        this.clearAlert();
        // create element
        const div = document.createElement('div');
        // add classes
        div.className = classname;
        //  Add Text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // inser alert
        container.insertBefore(div, search); // means insert div in container before search

        // clear after 2 seconds
        setTimeout( ( )=> {
            this.clearAlert();
        }, 3000 )
    }

    // clear show Alert
    clearAlert() {

        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }
}