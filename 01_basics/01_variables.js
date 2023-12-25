// constants
const accountId = 144553
let accountEmail = "sahil@google.com" // { both let and var are used to declare variables But Prefer not to use var because issues in block scope and function scope  }
var accountPassword = " 12345"
accountCity = "Jaipur"  // this is possible but not a good practice 
let accountState ; //UNDEFINED

/*
Variables declared by let are only available inside the block where they're defined. 
Variables declared by var are available throughout the function in which they're declared.
*/

// accountId = 2  { NOT ALLOWED}

accountEmail = "SS@ss.com"
accountPassword = "121121"
accountCity = "bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity , accountState])