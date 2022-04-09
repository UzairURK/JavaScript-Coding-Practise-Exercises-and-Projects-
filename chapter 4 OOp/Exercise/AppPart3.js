/* 

10: Provide a class BankAccount and subclasses SavingsAccount and CheckingAccount. A savings account has an instance field for the interest and an addInterest method that adds it. A checking account charges a fee for each withdrawal. Do not manipulate the superclass state directly but use the superclass methods. 

*/
class Bankaccount {

    Amount;
    constructor( name, accountNO,  ) {
        this.name = name;
        this.accountNO = accountNO;
    }

    deposit( amount ) {
        this.Amount = amount;
    }

    showAmount() {
        return this.Amount;
    }

    
}

class SavingAccount extends Bankaccount{

    #interset;
    constructor(name, accountNO) {
        super(name, accountNO); // pass parameter to it's super class
    }

    addInterset() {
        this.#interset = ( 10 * super.showAmount() ) / 100; // super.showAmount() call super class method
        return ` ${this.#interset}`;
    }


}

class CheckingAccount extends SavingAccount {

    presentamount;
    fees;
    // amount;
    // totalamount;
    constructor( name, accountNO ) {

    super(name, accountNO); //  pass parameter to it's super class 
    
    }
    
    withdraw(amount) {
        this.amount = amount;
        this.presentamount = ( this.showAmount() - super.addInterset() );
        this.fees = 2 * amount / 100;
        if( this.amount < this.presentamount  ) {
            return `You have withfrawn ${this.amount}, Fess deducted is ${this.fees}`;
        }
        else {
            return  'Balance is unsufficient'
        }
    }
    totalAmount() {
        this.totalamount = this.presentamount - ( this.amount + this.fees );
        return this.totalamount;
    }

}

    const Uzair = new CheckingAccount('Uzair', 132145624 );

    Uzair.deposit(50000);
    console.log(Uzair.showAmount());
    console.log(`Interset is ${Uzair.addInterset()}`);

    console.log(`You have withdrawn ${Uzair.withdraw(40000)}`);
    console.log(`Total Amount is ${Uzair.totalAmount()}`);

