function EventObserver() { // create constructor

    this.observer = [];
}

EventObserver.prototype = {
    subscribe: function(fn) { // passing function
        this.observer.push(fn); // we are storing fnnction in "observer" array
        console.log(`You are subscribed to ${fn.name}`);
        console.log(this.observer);
    },
    unsubscribe: function(fn) {
        // Filter out from the list whatever matches the callback fucntion. If there is not match, the callback gets to stay on the list.The filter returns a new list and reasigns the list of observer.
        this.observer = this.observer.filter( function(item){ // filter() is built-in method.callback is passed
            if(item !== fn) {
                return item;
                console.log(item);
            }
            console.log(item);
        }); 
        console.log(`You are unsubscribed from ${fn.name}`);
    },

    fire: function() {
        this.observer.forEach(function(item){
            item.call(); // calling stored function each time
        });
    }
}

const click = new EventObserver(); // inatstantiate the object of EventObserver() constructor

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMilliseconds); // passing function

});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliseconds); // passing function

});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();

});

// click Handler
const getCurrMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}