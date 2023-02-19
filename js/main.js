var email = document.querySelector('.p-2')
var pass = document.querySelector('.mt-4')
var btn = document.querySelector('.login')
var key = document.querySelector('.key')

// console.log(key);

if (localStorage.getItem('logs') != null) {
    var logat = JSON.parse(localStorage.getItem('logs'))
    console.log(logat);
}
// 

var regex
var passWord

function checkWord() {
    regex = /^\w{3,15}(\.)\w{1,15}(\@gmail)(\.com)$/
    passWord = /^(\w|\W){3,12}$/

    return passWord.test(pass.value) && regex.test(email.value)
}

email.addEventListener('change', checkWord)
pass.addEventListener('change', checkWord)


function matchReg() {
    if (checkWord() == true) {
        signIn()
        key.classList.add('d-none')
        document.querySelector('.passwrite').classList.add('d-none')

    } else {
        passEmail()
    }
}

btn.addEventListener('click', matchReg)

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
}

function signIn() {
    if (JSON.parse(localStorage.getItem('logs')) != null) {
        for (var i = 0; i < logat.length; i++) {
            if (logat[i].mail == email.value && logat[i].passWord == pass.value) {
                btn.href = `welcom.html`
                localStorage.setItem('messg', JSON.stringify(email.value))
            } else {
                document.querySelector('.should').innerHTML = 'incorrect email or password ! ( you must sign up )'

            }
        }
    } else {
        document.querySelector('.should').innerHTML = `Your Email does'nt exsit !!`

    }
    checkWord()
}

