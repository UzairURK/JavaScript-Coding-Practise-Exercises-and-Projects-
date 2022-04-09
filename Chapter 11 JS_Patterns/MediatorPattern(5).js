// creating chat room by meditor
const User = function(name) { // constructor
    this.name = name; // variable in constructro
    this.chatroom = null; // variable in constructor
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
        // console.log(this);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() { // constructor
    let users = {}; // empty object
    return {
        register: function(user) {
            users[user.name] = user; // we are storing objects. name.user in "user.name" refers to object that we have created i.e Uzair.name;
            user.chatroom = this; // user in "user.chatroom" refers to object that we have created i.e Uzair.name;
            
        },
        send: function(message, from, to) {
            if(to) {
                // single message user message
                 to.recieve(message, from); // to in "to.recieve" refers to the object that we have created i.e Muneeb.recieve();
                // recieve(message, from); show error
            }
            else {
                // Mass message or Message to everyone
                for(let key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from); // calling each object except itself
                    }
                } // end of for
            } // end of else
        } // end of send
    } // end of return 
    
}

const Uzair = new User('Uzair');
const Hussain = new User('Husssain');
const Muneeb =  new User('Muneeb');

const chat = new Chatroom();
chat.register(Uzair);
chat.register(Hussain);
chat.register(Muneeb);
Uzair.send('Hello', Muneeb);
// Hussain.send('Hi Every One');