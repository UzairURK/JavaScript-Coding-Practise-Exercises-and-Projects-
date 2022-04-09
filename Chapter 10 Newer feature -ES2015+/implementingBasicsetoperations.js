// implementing basic set operations

// requirments: superset, union, intersection, difference, 

// superset
function superset() {



} // end of superset
// union
function union(setA, setB) {
    // create union set.
    let _union = new Set(setA);
    for(let i of setB) {
        _union.add(i); // only add it to the union
    }
        
    return _union;
    
} // end of union
// intersection
function intersection(setA, setC) {
    let _intersection = new Set();
    for(let elem of setC) {
        if( setA.has(elem) ) { // if it is found then add it
            _intersection.add(elem);
        }
    }
    return _intersection;

} // end of intersectioin
// difference 
function difference(setA, setB) {
    let _difference = new Set(setA);
    for(let i of setB) {
        if( _difference.has(i) ) { // if it is found then delete it
            _difference.delete(i); 
        }
    }
    return _difference;

} // end of difference 

// create sets
const setA = new Set([1, 3, 5, 7]);
const setB = new Set([2, 4, 5, 7, 6]);
const setC = new Set([1, 2, 3, 4, 5]);

console.log('Union of A and B ',union( setA, setB ));
console.log('Intersection of A and B ',intersection(setA, setC) );
console.log( 'Difference of A and C ',difference(setA, setC) );
