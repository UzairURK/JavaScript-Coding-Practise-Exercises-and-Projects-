function SimpleMembership(name) { // constructor of created object
    this.name = name;
    this.cost = '$5';
}

 function StandardMembership(name) {  // constructor of created object 
    this.name = name;
    this.cost = '$15';
}

const SuperdMembership = function(name) {  // constructor of created object by an other format
    this.name = name;
    this.cost = '$25';
}

function MemberFactory() { // creating an other contstructor

this.createMember = function(name, type) {
    let member;
    if(type === 'simple') {
        member = new SimpleMembership(name); // instantiat object of above constructor
    }
    else if(type === 'standard') {
        member = new StandardMembership(name); // instantiat object of above constructor

    }
    else if(type === 'super') {
        member = new SuperdMembership(name); // instantiat object of above constructor
    }

    member.type = type; // this is common property related to each object

    member.define = function() { // this is common function related to each object
        console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
} // end of method

} // end of constructor



const member = [];
const factory = new MemberFactory(); // inatstantiate the object of MemberFactor() constructor
member.push(factory.createMember('Uzair', 'simple')); // we are pushing into member array
console.log(member);

member.forEach(function(member){ // accessing each array member
    member.define();

});

