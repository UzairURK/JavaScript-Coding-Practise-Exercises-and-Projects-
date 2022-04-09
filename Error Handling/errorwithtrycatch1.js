const user = {email: 'chalo@gmail.com'};

try{
   // myfunc(); // call without declaration

   if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError ('User has no name!!!!');
   }
}
catch(e){
    // console.log(e);
    // console.log(`${e.name}: IT'S NULL STUPID!!!!\n${e.message}`);
    console.log(e.message);

}
finally{
    console.log('finally runs regardless of results...')
}

console.log('Program continues');