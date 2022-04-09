document.querySelector(".customer-1").addEventListener('click', customer);
document.querySelector(".customer-2").addEventListener('click', customers);

function customer() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onprogress = function() {
        console.log("Ready State: " +xhr.readyState);
    }
    xhr.onload = function() {

        console.log("Ready State: " +this.readyState);
        if(this.status === 200 ) {
            const customer1 = JSON.parse(xhr.responseText);
            let output = 
            `<ul>
            <li> ${customer1.id} </li>
            <li> ${customer1.name} </li>
            <li> ${customer1.phone} </li>
            <li> ${customer1.email}</li>
            </ul>
            `
            document.querySelector(".output-1").innerHTML = output;
        }
    }
    xhr.onerror = function() {
        console.log("Error...");
    }
    xhr.send();
}

function customers() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    xhr.onload = function() {

        console.log(this.readyState);

        if( this.status === 200 ) {
            const customers = xhr.responseText;
            const JsonCustomer = JSON.parse(customers);
            let output = '';
            JsonCustomer.forEach((customer2) =>  {
            output +=
                `
            <ul>
            <li> ${customer2.id} </li>
            <li> ${customer2.name} </li>
            <li> ${customer2.phone} </li>
            <li> ${customer2.email}</li>
            </ul>
                
                `
            });
            document.querySelector(".output-2").innerHTML = output;
        }
    } // end of onload

    xhr.onerror = function() {
        console.log("Error...");
    }
    xhr.send();
 }