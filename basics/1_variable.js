const accountId = 231456
var accountEmail = "aditya@gmail.com"
let accountPassword = "12345678"
accountCity = "Delhi"
let accountState
    /*try prefer not to use var
    because it is function scoped and can be redeclared and redefined in the same scope.
    let is block scoped and can be redeclared but not redefined in the same scope.  

    */
accountCity = "Patna"
accountState = "Bihar"
accountEmail = "accountemail@gmail.com"




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])