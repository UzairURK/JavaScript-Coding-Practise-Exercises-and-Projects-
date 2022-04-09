
function easyHTTP() {
  this.http = new XMLHttpRequest(); // like xhr = new XMLHttpRequest()
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // we capturing it in this scope.Or because of hoisting
  this.http.onload = function() {  
    if(self.http.status === 200) { // thsi.http.status === 200 ---> shows error
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request

