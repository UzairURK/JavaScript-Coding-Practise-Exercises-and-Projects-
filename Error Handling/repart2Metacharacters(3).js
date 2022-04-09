let re, re1, re2, re3, re4, re5, re6, re7;

// Literal Characters
re = /hello/;
re1 = /hello/i;
// Meta Characters Symbols
re2 = /^h/i; // .It compares that must start with given characters i.e 'h';
re3 = /d$/i; // It compares that must end with given characters i.e 'd'. It will match
//re3 = /fd$/i; // It compares that must end with given characters i.e 'd'. It will not  match because this is not in sequence while in comparison
re4 = /h.llo/i; // dot or period character. means, It matches any ONE character. as in example. there can be any thing in matching string at the index of dot but before and after dot there should same characters.  
re5 = /h*llo/i; // // star or wildcard character. means, It matches ZERO or more times. as in example. there can be any thing in matching string at the index of * but before and after * there should same characters.
re6 = /gre?a?y/i; // Optional Character. Example: spelling of grey can br gray so we have to set a or e as optional
re7 = /gre?a?y\?/ //Escape Characters.
//===============================================================================
// String to match
const str = 'Hello World'; 
// const str = 'HeUMllo World'; // for re5. check this as well to understand clearly
// for Optional
const str1 = 'gray'; // or const str1 = 'gray'
const str2 = 'gray?'; // or const str1 = 'gray'
function retTest(re, str) {

    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does not match ${re.source}`);
    }
}

//retTest(re5, str); // pass all above re, re1,etc to see difference
// for Optional Characters
//retTest(re6, str1); // pass all above re, re1,etc to see difference
// for Escape Characters
retTest(re7, str2);