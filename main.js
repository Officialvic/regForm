// To save registration data on localStorage
let saveData = (e) => {
    e.preventDefault();

    // collect data for registered users
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let users = {
            firstName,
            lastName,
            email,
            password
        }
        localStorage.setItem('users', (JSON.stringify(users)))
}

// To Check for login.
let login = (e) => {
    e.preventDefault();
    
    let registeredUsers = JSON.parse((localStorage.getItem('users')))

    let loginEmail = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value

    let loginDetail = {
        loginEmail,
        loginPassword
    }

    loginDetail = JSON.stringify(loginDetail)
    
    let filteredDetail = JSON.parse(loginDetail);
    console.log(filteredDetail) 
    console.log(registeredUsers)
    console.log(registeredUsers.email)

    if (filteredDetail.loginEmail === registeredUsers.email && filteredDetail.loginPassword === registeredUsers.password) {
        alert('Welcome onboard dear user');
    } else {
        alert("Incorrect Email or Password. Kindly signup if you don't an account yet")
    }
}


