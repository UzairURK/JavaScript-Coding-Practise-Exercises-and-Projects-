function easyHttp() {

    this.http = new XMLHttpRequest();
}

// get post
easyHttp.prototype.get = function(url, callback) {

    this.http.open('GET', url, true );
    let self = this;
    this.http.onload = function()  {

        if( self.http.status === 200 ) {
            callback(null,self.http.responseText);
        }
        else {
            callback('Error', self.http.status);
        }
    }
    this.http.send();
}

// make post
easyHttp.prototype.post = function( url, data, callback ) {

    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;

    this.http.onload = function() {

        if( self.http.status === 200 ) {
            callback(null, self.http.responseText);
        }
        else {
            callback('Error', self.http.status);
        }
        // callback(null, self.http.responseText);
    }

   this.http.send(JSON.stringify(data));

}

// delte post
easyHttp.prototype.delete = function(url, callback) {

    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        
        if(self.http.status === 200) {
            callback(null, 'Post Deleted')
        }
        else {
            callback('Error', self.http.status);
        }
    }
    this.http.send();
}

// easyHTTP.prototype.delete = function(url, callback) {
//     this.http.open('DELETE', url, true);
  
//     let self = this;
//     this.http.onload = function() {
//       if(self.http.status === 200) {
//         callback(null, 'Post Deleted');
//       } else {
//         callback('Error: ' + self.http.status);
//       }
//     }
  
//     this.http.send();
//   }

