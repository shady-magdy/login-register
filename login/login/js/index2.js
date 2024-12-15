var nameinout = document.getElementById("Name")
var emailinout = document.getElementById("email")
var passwordinout = document.getElementById("password")
var layermassege = document.querySelector(".layer")
var layermassege2 = document.querySelector(".layer2")
var layername = document.querySelector(".layername")
var layeremail = document.querySelector(".layeremail")
var layerpassword = document.querySelector(".layerPassword")
var icon = document.getElementById("icon")
var icon2 = document.getElementById("icon2")
icon.addEventListener("click", function () {
    passwordinout.type = "text"
    icon.style.display = "none"
    icon2.style.display = "block"

})
icon2.addEventListener("click", function () {

    passwordinout.type = "password"
    icon.style.display = "block"
    icon2.style.display = "none"

})


var login = []
if (localStorage.getItem("login") != null) {
    login = JSON.parse(localStorage.getItem("login"))
}
function add() {

    if (nameinout.value == "" || emailinout.value == "" || passwordinout.value == "") {

        layermassege.style.display = "block"
        layermassege2.style.display = "none"
    } else {
        layermassege.style.display = "none"

        layermassege2.innerHTML = "Success"
        layermassege2.style.display = "block"
        if (nameregex() && emailregex() && changepassword() == true) {

            var object = {
                name: nameinout.value,
                email: emailinout.value,
                password: passwordinout.value,

            }
            login.push(object)
            location.href = "../../login/sign up/index.html"
            localStorage.setItem("login", JSON.stringify(login))
            console.log(login);

            layermassege.style.display = "none"
            layermassege2.innerHTML = "Success"
            layermassege2.style.display = "block"

        } else {
            layermassege.style.display = "block"
            layermassege2.style.display = "none"
        }

    }
}

nameinout.addEventListener("change", nameregex)

function nameregex() {

    var regex = /^[A-Za-z]{1,8}([1-9]{1,3})?$/

    if (regex.test(nameinout.value) == true) {
        nameinout.classList.add("is-valid")
        nameinout.classList.remove("is-invalid")
        layername.style.display = "none"
        return true
    } else {
        layername.style.display = "block"
        nameinout.classList.add("is-invalid")
        nameinout.classList.remove("is-valid")
        return false
    }


}
emailinout.addEventListener("change", emailregex)

function emailregex() {

    var emailregexx = /^[A-Za-z1-9]{1,}@[a-z]{1,6}\.[a-z]{1,3}$/


    if (emailregexx.test(emailinout.value) == true) {
        emailinout.classList.add("is-valid")
        emailinout.classList.remove("is-invalid")
        layeremail.style.display = "none"
        return true

    } else {
        layeremail.style.display = "block"
        emailinout.classList.add("is-invalid")
        emailinout.classList.remove("is-valid")
        return false

    }
}



passwordinout.addEventListener("change", changepassword)

function changepassword() {

    var passwordregx = /^[A-Za-z1-9]{6,16}$/

    if (passwordregx.test(passwordinout.value) == true) {

        passwordinout.classList.add("is-valid")
        passwordinout.classList.remove("is-invalid")
        layerpassword.style.display = "none"
        return true

    } else {
        layerpassword.style.display = "block"
        passwordinout.classList.add("is-invalid")
        passwordinout.classList.remove("is-valid")
        return false

    }

}