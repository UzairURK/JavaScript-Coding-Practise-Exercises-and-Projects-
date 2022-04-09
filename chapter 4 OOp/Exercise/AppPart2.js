//7: Rewrite the Employee class using private instance fields, as shown in Section 4.6, “Instance Fields and Private Methods” (page 85).

class bankAccount {
    // NB: Private fields can not be accessed in static methods and out of class.
    #balance; // balance as a private instance
    #fees;
    constructor( amou ) {
        this.amou = amou;
        this.#balance = amou; // 'this' is must
    }

    deposit( amount ) {
        // this.#balance += amount; --> error
        return `You have deposited ${this.#balance}`;

    }
    withdraw( amount ) {
        if( amount <= this.#balance ) {
            this.#fees = 30; 
            this.#balance 
            return `Withdran ${amount}, fees deducted ${this.#fees}`;
        }
        else {
            return `Balance is less`
        }
    }
    totalBalance() {
        return` Your balance is ${this.#balance = this.#balance - this.#fees}`;
    }
}

const harry = new bankAccount( 10000 );
    // harry.#balance = 23; --> show error because It is private field
console.log(harry.deposit(50000));
console.log(harry.withdraw(6000))
console.log(harry.totalBalance());

/*9: Provide a class Random with static methods


Random.nextDouble(low, high)
Random.nextInt(low, high)
Random.nextElement(array)
that produce a random number between low (inclusive) and high (exclusive), or a random element from the given array. */

class Random {
    
    static nextDouble( low, high ) {

        return Math.random() * ( high - low ) + low;
    }
    static nextInt( low, high ) {

        return Math.floor( Math.random() * (high - low ) ) +low;
    }
    static nextElement(arr) {
         const length = arr.length;
         const index = Math.floor( Math.random() * length );
        return arr[index];
    }

}
    const intRandom = Random.nextInt(10, 20);
    const doubleRandom = Random.nextDouble(10.5, 20.9);
    const array = ['A', 'B', 'C', 'D', 'E', 'F'];
    const randomArray = Random.nextElement(array);
    console.log(randomArray);
    