/*methods. create object without create class*/

let employee = {
    name: 'harry',
    salary: 300000,
    jointdate: new Date(2015, 10, 1),// means 1 november
    bonus (percent)  { // arrow function
        return this.salary *= 1 + percent / 100;
    }
}

console.log(employee.bonus(50));