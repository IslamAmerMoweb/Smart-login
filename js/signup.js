var email = document.querySelector('.email')
var pass = document.querySelector('.pass')
var key = document.querySelector('.key')
var endSignUp = document.querySelector('.endsign')
var nameSign = document.querySelector('.name')


var logs = []

function checkWord() {
    myName = /^[A-Z][a-z]{2,15}$/
    regex = /^\w{3,15}(\.)\w{1,15}(\@gmail)(\.com)$/
    passWord = /^(\w|\W){3,12}$/

    return passWord.test(pass.value) && regex.test(email.value) && myName.test(nameSign.value)
}


function matchReg() {
    if (checkWord() == true) {
        signUp()
        document.querySelector('.success').innerHTML = 'Success'
        key.classList.add('d-none')
        document.querySelector('.passwrite').classList.add('d-none')
        document.querySelector('.your').classList.add('d-none')

    } else {
        passEmail()
    }
}

function passEmail() {
    if (email.value == '') {
        key.innerHTML = 'email empty'
    }
    else if (regex.test(email.value) == false) {
        key.innerHTML = 'email should be like name.ex@gmail.com'
    }

    if (pass.value == '') {
        document.querySelector('.passwrite').innerHTML = 'pass empty'
    } else if (passWord.test(pass.value) == false) {
        document.querySelector('.passwrite').innerHTML = 'password ! should have three number'
    }
    if (nameSign.value == '') {
        document.querySelector('.your').innerHTML = 'name is required'
    } else if (myName.test(nameSign.value) == false) {
        document.querySelector('.your').innerHTML = 'first letter should be cabital'
    }
}

function signUp() {

    console.log(email.value);
    var arr = {
        mail: email.value,
        passWord: pass.value,
        name: nameSign.value,
    }

    logs.push(arr)
    localStorage.setItem('logs', JSON.stringify(logs))
}

endSignUp.addEventListener('click', matchReg)
