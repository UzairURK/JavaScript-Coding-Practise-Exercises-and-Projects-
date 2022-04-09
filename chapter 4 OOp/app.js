/*You won’t often need to worry about the difference between traditional classes and the prototype-based system of JavaScript
NB:  JavaScript doesn’t really have classes. A class is just a constructor function. A subclass is a constructor function that calls a superclass constructor.
*/

function employee ( salary, name ) { // constructor
    this.salary = salary;
    this.name = name;

    
     this.dateOfJoin = function () { // methods
        return "20-Nov-2018";
    }
}

    employee.prototype.raiseSalary = function (percent) {
        return this.salary *= 1 + percent / 100; 
    }

    const harry = new employee(50000, 'UHK'); // creating object
    console.log(harry.dateOfJoin())
    // console.log(harry.raiseSalary(50));

    //=================================================================================
    /*4.4 The Class Syntax
Nowadays, JavaScript has a class syntax that bundles up a constructor function and prototype methods in a familiar form. Here is the class syntax for the example of the preceding section:

 */

class Employee {

    constructor(fName, lName, Salary) {
        this.fName = fName;
        this.lName = lName;
        this.Salary = Salary;
    }

    raiseS(per) {
        return this.Salary *= 1 + per / 100;
    }
    // getters
    get fullName(  ) {
        return `Full Name is ${this.fName} ${this.lName}`;
    }
    set pension( cutpercenetage ) {
        this.Salary *= 1 - cutpercenetage / 100;
    }
    get fullPension() { // getters does not have any formal parameter
        return this.Salary;
    }

}

    const jose = new Employee('Jose', 'doe', 50000);
    //  jose.pension = 20; // calling set pension with parameter 20
    const pens = jose.fullPension; // calling get fullPension
    // console.log(pens);

    // 4.6 Instance Fields and Private Methods

class bankAccount {
     
    //balance;// define variable
    constructor(){
        // this.balance = 0;
    }
    deposit(amount) {
        this.amount = amount;
        this.balance += amount;
    }

    totalBalance() {
        return this.balance;
    }

    // 4.7: static method:. To call a static method, whether inside or outside the class, add the class name. In a class declaration, you can declare a method as static. Such a method does not operate on any object.
    
}

const uhk = new bankAccount();
    uhk.balance = 20000; // initializing balace with value
    uhk.deposit(10000);
    console.log();
 
    // 4.8 Subclasses:

class Animal {
    constructor ( leg, animal ) {
        this.leg = leg;
        this.animal = animal;
    }
    legs () {
        return `${this.animal} has ${this.leg} legs`
    }
}

class Dog extends Animal {
    //NB: If constructor is not defined than It automatically passes arguments to super constructor than in java, c++ etc.
    constructor( leg, animal, name ) {
        super(leg, animal); // passing values to super class constructor. we have to call super() one time.
        // super(animal); --> show error
        // this.leg = leg; --> not neccessarily
        // this.animal = animal; --> not neccessarily
        this.name = name //You can only use the this reference after the call to super
    }
    isAni() {
        return `${this.name}  has ${this.leg} legs too`;
    }

}

    sheferd = new Dog(4, 'animal', 'Dog');
    console.log( sheferd.legs() );
    console.log( sheferd.isAni() );

