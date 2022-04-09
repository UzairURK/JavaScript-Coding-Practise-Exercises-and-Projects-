// Example of singleton pattern is login system only one can can login to its account
const singleton = (function() {

    let instance;
    function createInstance() {
        const object = new Object({name: 'Uzair'});
        return object;
    }

    return {
        getinstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }


}) ();

const instanceA = singleton.getinstance();
const instanceB = singleton.getinstance();
console.log(instanceA);
console.log(instanceA === instanceB);