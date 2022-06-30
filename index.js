alert("Welcome!");

//function for getting user details

function getUserDetails() {
  //collecting user input.
  let username = prompt("Enter your username");
  console.log(validateUsername(username))
  //calling the username validator function

  while (validateUsername(username) == false) {
    username = prompt(
      "Invalid entry! Username should be less than 10 characters"
    )
}
    if (username == null) {
        return
    }
    else if (username != null) {
        alert(`Successful! welcome again, ${username}!`);
      } else {
        return;
      }
  console.log(username)

  let password = prompt("Enter your password");
  console.log(validatePassword(password));

  //calling the password validator function
  while (validatePassword(password) == false) {
    password = prompt(
      "Invalid entry! Please enter a password between 7 and 14 characters"
    );
  }

  if (password == null) {
    return
}
console.log(password)

  let confirmPassword = prompt("Confirm your password");
  console.log(confirmPassword);

  while (confirmPassword != password) {
    confirmPassword = prompt(
      "Passwords do not match, please enter the same password!"
    );
    if (confirmPassword == null) {
        return
    }
}

console.log(username,password,confirmPassword)
//an object that stores the username and password of the user
const userDetails = { username: username, password: password };
console.log(userDetails)

}

getUserDetails();
alert("This is the end of the program, Goodbye!");








//a function to validate that the username does not exceed 10 characters. Returns a boolean value.
function validateUsername(username) {
    if (username == null) {
      return true;
    } else if (username == "") {
      return false;
    } else if (username.length >= 10) {
      return false;
    } else {
      return true;
    }
  }
  
  //function to validate if the user inputed the password based on requirements. Returns a boolean value
  function validatePassword(password) {

    if (password == null) {
      return false;
    } else if (password == "") {
      return false;
    } else if (password.length <= 6 || password.length >= 15) {
      return false;
    } else {
      return true;
    }
  }
  
 
  
