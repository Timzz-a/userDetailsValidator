alert("Welcome!")

//collecting user input.
    let username = prompt("Enter your username")
    console.log(validateUsername(username))

    //calling the username validator function
    while (validateUsername(username) == false) {
        username = prompt("Invalid entry! Please Enter a valid username")
    }
    
    let password = prompt("Enter your password")
    console.log(validatePassword(password))
    
    //calling the password validator function
    while (validatePassword(password) == false) {
        password = prompt("Invalid entry! Please Enter a valid password")
    }
    
    let confirmPassword = prompt("Confirm your password")
    console.log(validateConfirmPassword(confirmPassword))
    
    while (validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("Passwords do not match, please enter the same password!")
    }
    
//an object that stores the username and password of the user
const userDetails = {username:username , password:password}

console.log(userDetails)
alert(`Successful! welcome again, ${username}!`)
alert("This is the end of the program, Goodbye!")

//a function to validate that the username does not exceed 10 characters. Returns a boolean value.
function validateUsername(username) {

    if (username == null){
        return false
    }

    else if (username == ""){
        return false
    }

    else if (username.length >= 10){
        return false
    }
    else{
        return true
    }
}

//function to validate if the user inputed the password based on requirements. Returns a boolean value
function validatePassword(password) {

    if (password == null){
        return false
    }

    else if (password == ""){
        return false
    }

else if (password.length <= 6){
    return false
}
else {
    return true
}
}

//function to validate if the user inputed the same password. Returns a boolean value

function validateConfirmPassword(confirmPassword) {

    if (confirmPassword == password){
        return true
    }

    else{
        return false
    }
}