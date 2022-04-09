// Storage Controller
const StorageCtr = (function(){

    // public method
    return {
        storeItem: function(item){
            let items; // an empty array
            // check if any items in local storage 
            if(localStorage.getItem('items') === null) {
                items = [];
                // push new item
                items.push(item);
                // set local Storage
                localStorage.setItem('items', JSON.stringify(items)); // 2nd parameter is for to convert Arrays into Strings as LocalStorage holds string only
            }
            else {
                // Get what is already in Local Storage. 
                items = JSON.parse(localStorage.getItem('items')); // here converting Array to Object
                // Push new Item
                items.push(item);
                // Reset items in local Storage
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function() {
            let items;
            if(localStorage.getItem('items') === null) {
                items = [];

            }
            else {
                items = JSON.parse(localStorage.getItem('items')); // convert to objec
            }
            
            return items;
        },
        updateItemStorage: function(updatedItem) { // It is also for Total Calories
            let items = JSON.parse(localStorage.getItem('items')); // pull out of local storage
            items.forEach(function(item, index){
            if(updatedItem.id = item.id) { // if it mactches
                items.splice(index,1, updatedItem); // we are deleting pervious and adding updatedItem
            }
            });
            //now set to local Storage
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items')); // pull out of local storage.here items refer to the let items
            items.forEach(function(item, index){
            if(id === item.id) {
                console.log(id) // if it mactches
                items.splice(index,1); // we are deleting pervious and adding updatedItem
            }
            });
            //now set to local Storage
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function() {
            localStorage.removeItem('items')
        }
    } // end of return
}) ();

// Item Controller
const ItemCtr = (function(){
    // console.log("kskl");
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    } // end of constructor

    // Data Structure / State
    const data = {
        // items: [ // without local Storage
        //     // {id: 0, name:'Steak Dinner', calories: 1200},
        //     // {id: 1, name:'Cookie', calories: 400},
        //     // {id: 2, name:'Eggs', calories: 300}
        // ],
        items: StorageCtr.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
        
    } // end of data
    // public
    return {
        getItems: function() {
            return data.items;

        },
        // add item
        addItem: function(getName, getCalories) {
            let ID;
            // generate id
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1; // auto increment

            }
            else {
                ID = 0;
            }
            // calories to number
            getCalories = parseInt(getCalories); // make calories input number

            // create new Item by calling above constructor
            newItem = new Item(ID, getName, getCalories); // call constructor

            // add to item array
            data.items.push(newItem);
            return newItem;
        },
        getItemById: function(id) {
            let found = null;
            // Loop through item
            data.items.forEach(function(item){
                if(item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories) {
            // Calories to Item
            calories = parseInt(calories);
            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id) { // if  id matches
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id) {
            // Get ids
            const ids = data.items.map(function(item){
                return item.id;
            });

            // Get Index
            const index = ids.indexOf(id);

            // Remove item
            data.items.splice(index, 1); // used to delete items
        },
        clearAllItems: function() {
            // set items array to empty
            data.items = [];
            
            
        },
        setCurrentItem: function(item) {
            data.currentItem = item
        },
        getCurrentItem: function() {
            return data.currentItem;
        },
        getTotalaCalories: function() {
            let total = 0;
            // Loop throgh items and add calls
            data.items.forEach(function(item){
                total += item.calories;
            });
            // set total calories in data structure
            data.totalCalories = total;
            // return total calories
            return data.totalCalories;
        },
        logData: function() {
            return data;
        }
    };

}) (); // end of item controller


// UI Controller
const UICtr = (function(){
    // dynamically set UI Id
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    // public methods
    return {
        // for showing items in UI
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item){
                html += `
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em> ${item.calories}</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>
                
                `;
                document.querySelector(UISelectors.itemList).innerHTML = html;
            });
        },
        // return input of form
        getItemInput: function() { // returns objects
            return {
            name: document.querySelector(UISelectors.itemNameInput).value,
            calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item) {
           // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li) // beforeend means before end
        },
        updateListItem: function(item) {
        let listItems = document.querySelectorAll(UISelectors.listItems);

        // Turn Node list into Array
        listItems = Array.from(listItems);
        listItems.forEach(function(listItem){
            const itemID = listItem.getAttribute('id'); // getting id attribute
            if(itemID === `item-${item.id}`) { // if fetched ID = any ID
                document.querySelector(`#${itemID}`).innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>    
                `;
            }
        });

        },
        deleteListItem: function(id) {

            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove(); // used to remove elemet
            
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtr.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtr.getCurrentItem().calories;
            UICtr.showEditState();
        },
        removeItems: function() {
        // select all elements
        let listItems = document.querySelector(UISelectors.listItems);
        // Turn Node list into array
        listItems = Array.from(listItems);
        listItems.forEach(function(item){
            item.remove();
        });
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        // Show total Calories \
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        // clear Edit States
        clearEditState: function() {
            UICtr.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            
        },
        // show Edit States
        showEditState: function() {
            
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            
        },
        // return UISelectors by public method
        getSelectors: function() {
            return UISelectors;
        }

    } // end of return 
})(); // end of UICtr

// App Controller

const App = (function(ItemCtr, StorageCtr, UICtr){

    // load event listeners
    const loadEventListeners = function() {

        // Get uISelectors
        const UISelectors = UICtr.getSelectors();
        // add item
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13 ) {
                e.preventDefault();
                return false;
            }
        });
        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // Delete button
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        // Back Button Event
        document.querySelector(UISelectors.backBtn).addEventListener('click', function(e){
            UICtr.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            e.preventDefault();
        });

        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

    } // end of load event listener
    // Add item submit function
    const itemAddSubmit = function(e) {
        // get form input from UI Controller
        const input = UICtr.getItemInput();
        // check for name and calories input
        if(input.name !== '' && input.calories !== '') {
            // add item
            const newItem = ItemCtr.addItem(input.name, input.calories);
            // Add item to UI
            UICtr.addListItem(newItem);// call method

             // Total Calories
            const totalCalories = ItemCtr.getTotalaCalories();
            // Add total Calories to UI
            UICtr.showTotalCalories(totalCalories);

            // Stora in local Storage
            StorageCtr.storeItem(newItem);

            // Clear Inputs
            UICtr.clearInput(); // call method

        

        }
        e.preventDefault();
    } // end of itemAddSubmit

    // Click edit item
    const itemEditClick = function(e) {
        // checking desired target
        if(e.target.classList.contains('edit-item')) {
            // get id (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id; // means, when we click target then id should be of parent of its parent i.e Id Grand Parent 
            
            // break into an array
            const listIdArr = listId.split('-'); // gives ['item', '0'], ['item', '1'], etc;
            
            // get the actual id int integer form
            const id = parseInt(listIdArr[1]);

            //Get Item (call function)
            const itemToEdit = ItemCtr.getItemById(id);

            //Set Current Item (call function)
            ItemCtr.setCurrentItem(itemToEdit);

            // Add Item to form (call Function)
            UICtr.addItemToForm();

        }
        

        e.preventDefault();
    } // end of itemUpdateSubmit

    //Update Item Submit
const itemUpdateSubmit = function(e) {
    // get item input
    const input = UICtr.getItemInput();

    // Update Item
    const updatedItem = ItemCtr.updateItem(input.name, input.calories); // getting name and calories which we just entered 

    // Update UI.call Updated list item to update item
    UICtr.updateListItem(updatedItem);
     // Total Calories
     const totalCalories = ItemCtr.getTotalaCalories();
     // Add total Calories to UI
     UICtr.showTotalCalories(totalCalories);
     // Update in local Storage
     StorageCtr.updateItemStorage(updatedItem);
     // clear fields
     UICtr.clearEditState();
    e.preventDefault();
}
    // itemDeleteSubmit
const itemDeleteSubmit = function(e) {
        // Get Current Item
     const currentItem = ItemCtr.getCurrentItem();

        // Delete from Data Structure
        ItemCtr.deleteItem(currentItem.id); // pass current Item

        // Delete From UI
        UICtr.deleteListItem(currentItem.id);
        // Total Calories
     const totalCalories = ItemCtr.getTotalaCalories();
     // Add total Calories to UI
     UICtr.showTotalCalories(totalCalories);
     // Delte From Local Storage
     StorageCtr.deleteItemFromStorage(currentItem.id);
     // clear fields
     UICtr.clearEditState();
        e.preventDefault();
    }

    // clear Items Event
const clearAllItemsClick = function(e) {
    // Delete all items from data structure
    ItemCtr.clearAllItems();
    // Total Calories
     const totalCalories = ItemCtr.getTotalaCalories();
    // Add total Calories to UI
     UICtr.showTotalCalories(totalCalories);

     // Remove From UI
     UICtr.removeItems();
    // clear from Local Storage
    StorageCtr.clearItemsFromStorage();
     // Hide List
     UICtr.hideList();
     e.preventDefault();
}
    // public methods
    return {
        init: function() {
            // clear edit state / set initial
            UICtr.clearEditState();
            // fetch Items from data structure
            const items = ItemCtr.getItems();
            // console.log(items)

            // check If any Item
            if(items.length === 0) {
                UICtr.hideList();
            }
            else {
                UICtr.populateItemList(items); // call UI public method
            }
            // Total Calories
            const totalCalories = ItemCtr.getTotalaCalories();
            // Add total Calories to UI
            UICtr.showTotalCalories(totalCalories);
            
            // call load event listener
            loadEventListeners();

            
        },
        initItem: function() { // returning data from ItemCtr
            return ItemCtr.logData();
           
        }
    } // end of return 
})(ItemCtr, StorageCtr,UICtr); // end of AppCtr

App.init();
// console.log(App.initItem) // 
