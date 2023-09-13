// collect data for registered users
// let regForm = document.forms['regForm'];
// let data = new FormData(regForm);






// To save registration data on localStorage
let saveData = (e) => {
    e.preventDefault();

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
        localStorage.setItem(users, (JSON.stringify(users)))

//     for (let [key, value] of data) {
//     users.innerHTML = data.get(key);
// }
//     localStorage.setItem('users', (JSON.stringify(users)));
}


