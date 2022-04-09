class dad {
    constructor(name) {
        this.name = name;
    }
    printname() {
        console.log(this.name);
        var a = "I am superclas object";
        return a;
    }
    sendVal() {
        console.log(this.name);
        var a = 2;
        return `I am ${this.name}`;
    }
}

class son extends dad {
    constructor(name) {
        super(name);
    }
    printName() {
        // console.log(super.printname());
        return super.printname();
    }
    printvariable() {
        console.log(super.name);

    }
    getvalue() {
        console.log(super.sendVal())
    }
}

var o1 = new dad('jackson');
var o2 = new son('jack')

// o1.printname()
o2.printName()
// o2.printvariable()
// o2.getvalue()