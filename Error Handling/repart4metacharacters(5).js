let re, re1, re2, re3, re4, re5, re6, re7, re8, re9, re10;

// Shorthand Character Classes
re = /\w/;   // Word character - alphanumeric or _
re1 = /\w+/; // we use "\" to allow to use syntax symbol in regular expression i.e "\(" means use left bracket in regular expression,"\d" means digit in regular expression not d and+ = one or more character. but difference is that It gives full word in array but above does not.
re2 = /\W/;   // non-word charater class i.e (), *&, etc
re3 = /\d/; // match  digits like. 132123211321, uzair1321, etc
re4 = /\d+/; // difference is mentioned above. Match any digit 1 or more time
re5 = /\D/; // Match any non-digit, like uzair, uzair1321, but not 54545. Oppsiste to re4
re6 = /\s/; // Match whitespace characters like space, tab etc.
re7 = /\S/; // Match non-whitespace charcaters excluding space, tab. Opposite to re6
re8 = /hi\b/i; // word boundary


// asertions
re9 = /x(?=y)/;   // Match x followed by y like. xy, uzairxymunskjfk, etc
re10 = /x(?!y)/;   // Match x not followed by y. opposite to re9
//=================================================================================
// String to match
const str = 'sjdxyxxy'; 

// Log Result
const result = re8.exec(str);
console.log(result);
function retTest(re, str) {

    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does not match ${re.source}`);
    }
}

retTest(re10, str);