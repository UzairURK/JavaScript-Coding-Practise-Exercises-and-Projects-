//part2 Metacharaters. === Brackers [] - Character set ===
let re, re1, re2, re3, re4, re5, re6;
let rre, rre1, rre2, rre3, rre4, rre5, rre6;
re = /gr[ae]y/i; // Must a or e like gray or grey. used instead of Escape Character or Optional Charater.
re1 = /[^GF]ray/i; // Match anything except g or f
re2 = /[^]ray/i; // Match anything before "ray" character
re3 = /[A-Z]ray/; // Match any uppercase letter before "ray" character.It defines range from A to Z.
re4 = /[A-Za-z]ray/; // Match any uppercase letter or lowercase letter before "ray" character.It defines range from A to Z
re4 = /[0-9]ray/;  // can any from 0 to 9. It defines range from 0 to 9.

// String to match 
const str = 'Gray';
//==========================================================================
// Braces {} - Quantifiers
rre = /Hel{2}o/i;   // must occur exactly {m} amount of times
rre1 = /Hel{2,4}o/i; // must occur exactly {m, u} amount of times. i.e "l" character should be From 2 to 4 times.
rre2 = /Hel{2,}o/i; // must occur atleast {m} times. i.e atleast 2 times
// String to match
const str1 = 'Hello';
//=============================================================================
// parethese() - used for Grouping
rre3 = /^([0-9]x){3}$/i; // means 3 times a number and x, like 3x3x3x, 2x2x2x, 1x2x3x.
//rre3 = /[0-9]x{3}/i; // means a number and 3 times x.
rre4 = /([0-9]x){3}/i; // means atleast 3 times a number and x, like 3x3x3x, 2x2x2x, 1x2x3x.
// String to match
const str2 = '2x2x2x2x';
function retTest(re, str) {

    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} does not match ${re.source}`);
    }
}

retTest(rre4, str2);