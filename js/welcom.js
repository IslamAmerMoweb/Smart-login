var admin = document.querySelector('.name')

if (localStorage.getItem('logs') != null) {
    var local = JSON.parse(localStorage.getItem('logs'))
    var messg = JSON.parse(localStorage.getItem('messg'))
}

for (let i = 0; i < local.length; i++) {
    if (local[i].mail == messg) {
        admin.innerHTML = local[i].name
    }

}
