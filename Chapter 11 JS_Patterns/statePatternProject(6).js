/* How It works: First we have created desired constructor. Initially It was set to Home State then Each Stated is obtained by click Event which calls respective constructor   */

const PageState = function() { // constructor
    let currentState = new homeState(this); //constructor
  
    this.init = function() { // method
      this.change(new homeState); // Or this.change(currentState);
    }
  
    this.change = function(state) {
      currentState = state;
    }
  };
  
  // Home State, Constructor
  const homeState = function() { // Edited OR const contactState = function(page)
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
      <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
    `;
  };
  
  // About State, Constructor
  const aboutState = function() { // Edited OR const aboutState = function(page)
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
      <p>This is the about page</p>
  `;
  };
  
  // Contact State, Constructor
  const contactState = function() { // Edited OR const contactState = function(page)
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
  };
  
  // Instantiate pageState
  const page = new PageState();
  
  // Init the first state
  page.init();
  
  // UI Vars
  const home = document.getElementById('home'),
        about = document.getElementById('about'),
        contact = document.getElementById('contact');
  
  // Home
  home.addEventListener('click', (e) => {
    page.change(new homeState);
  
    e.preventDefault();
  });
  
  // About
  about.addEventListener('click', (e) => {
    page.change(new aboutState);
  
    e.preventDefault();
  });
  
  // Contact
  contact.addEventListener('click', (e) => {
    page.change(new contactState);
  
    e.preventDefault();
  });