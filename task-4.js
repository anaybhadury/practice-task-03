/**
 * -------Practice Task--------
 * Create different variables, each containing either an array or a non-array value.
 * Now use isArray to check if each variable is an array.
 * Print a message to the console indicating whether each variable is an array or not.
 */

const ages = 49;
const fruits = ['mango', 'orange', 'jambura'];
const arrayCheck = Array.isArray(fruits);
// console.log(Array.isArray(ages));
// console.log(Array.isArray(fruits));

if(arrayCheck === true){
    console.log('this is array')
}
else{
    console.log('this is not array')
}







