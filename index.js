alert("Welcome!");

const userDatabase = {
  timzz2334: {
    firstName: "Timilehin",
    lastName: "Sanni",
    email: "sannit@gmail.com",
    // password: "234reks",
    accountActivated: true,
  },

  lands400: {
    firstName: "Landed",
    lastName: "Property",
    email: "landed@gmail.com",
    // password: "lands123",
    accountActivated: false,
  },

  bliks234: {
    firstName: "Bliks",
    lastName: "Phobia",
    email: "blibli@gmail.com",
    // password: "bliks456",
    accountActivated: true,
  },
};

//function for getting user details

function getUserDetails() {
  //collecting user input.
  let username = prompt("Enter your username");
  console.log(validateUsername(username));
  //calling the username validator function

  while (validateUsername(username) == false) {
    username = prompt(
      "Invalid entry! Username should be less than 10 characters"
    );
  }
  if (username == null) {
    return;
  } else if (username != null) {
    console.log(username);
  } else {
    return;
  }

  let password = prompt(`${username}, Please Enter your password`);
  console.log(validatePassword(password));

  //calling the password validator function
  while (validatePassword(password) == false) {
    password = prompt(
      "Invalid entry! Please enter a password between 7 and 14 characters"
    );
  }

  if (password == null) {
    return;
  }
  console.log(password);

  let confirmPassword = prompt("Confirm your password");
  console.log(confirmPassword);

  while (confirmPassword != password) {
    confirmPassword = prompt(
      "Passwords do not match, please enter the same password!"
    );
  }
    if (confirmPassword == null) {
      return;
    }
  

  const user = userDatabase[username];

  if (user == undefined) {
    alert("User not found, Please register!");
    return
  } else if (user != undefined) {
    alert("Successful!");
  }

  console.log(user);
  alert(`
    User found with the following details:
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Email: ${user.email}
    `);

    alert("This is the end of the program, Goodbye!");
}

//an object that stores the username and password of the user
// const userDetails = { username: username, password: password };
// console.log(userDatabase)

getUserDetails();





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
