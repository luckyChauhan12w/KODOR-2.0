const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

function setError(invalidFields) {

    document.querySelectorAll('input').forEach((e) => {
        e.style.border = 'none'
    })


    invalidFields.forEach(field => {

        switch (field) {
            case 'username':
                console.log(userName);
                userName.style.border = '2px solid red';
                break;
            case 'email':
                email.style.border = '2px solid red';
                break;
            case 'password':
                password.style.border = '2px solid red';
                break;
        }
    });

}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()

    const fieldList = {
        username: /^[a-zA-Z0-9_]{4,}$/.test(userName.value),
        email: /^\S+@\S+\.\S+$/.test(email.value),
        password: /^(?=.*\d).{7,}$/.test(password.value)
    }

    if (Object.values(fieldList).every(e => e == true)) {
        alert('Your LOGIN Is Completed')
    } else {

        const invalidFields = Object.entries(fieldList)
            .filter(([field, isValid]) => !isValid)
            .map(([field]) => field);

        setError(invalidFields)
    }

});