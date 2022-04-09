// Basic Structure 
/*(function() {
// Declare private variables and functions

    return {
        // declare public variables and function
    }
    
}) ();
*/
/*
// STANDARD MODULE PATTERN
const UICtrl = (function(){
    // Private content
    let _text = 'Hello World';
     function _changeText() { // create private function
        const elem = document.querySelector('h1');
        elem.textContent = text;
    }
    // OR Other format to create function
    const changeText = function() {
        const elem = document.querySelector('h1');
        elem.textContent = text;
    }

    return {
        // public content
       callchangeText: function() { // object as we have done in iterator and generator
            changeText();
            console.log(_text);
        }


    } // end of return 

})();

UICtrl.callchangeText();
//UICtrl.changeText(); // we can not access because it is private function
console.log(UICtrl._text); // we get undfined because of private variable.
*/

// REAVEALING MODULE PATTERN

const ItemCtr = (function() {

    let data = []; // set to an emty array
    function addItem(item) {
        data.push(item);
        console.log('Item Added....');
        console.log(data);
    }

    function getItem(id) {
        return data.find(item => { // "item" is object that we pass in "addItem()" function.find() is method we are creating.
             //return item.id === 1; // returns true/false if id matches respectively 
              //return item.name === 'Hunza'; // returns true/false if name matches respectively 
            //return item; // returns object
            
        });
    }

    return {
        add: addItem,
        get: getItem
    }

}) ();

ItemCtr.add({id: 2, name: 'Hunza'}); // we are passing object and this will be added to array
console.log(ItemCtr.get(2))
//console.log(ItemCtr.get(2).id);  It is related to when whole object is returned i.e return item;
