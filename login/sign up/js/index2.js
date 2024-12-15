var emailinput = document.getElementById("email")
var passwordinput = document.getElementById("password")
var loginBtn = document.getElementById("loginBtn")
var layer = document.querySelector(".layer")
var layer2 = document.querySelector(".layer2")
var layer3 = document.querySelector(".layer3")
var icon1 = document.getElementById("icon1")
var icon3 = document.getElementById("icon3")
var signup = [];
signup = JSON.parse(localStorage.getItem("login"))

loginBtn.addEventListener("click", function () {

    if (emailinput.value == "" || passwordinput.value == "") {

        layer.style.display = "block"
        layer3.style.display = "none"

    } else {
        check()
    }
})

function check() {
    for (var i = 0; i < signup.length; i++) {
        if (emailinput.value == signup[i].email && passwordinput.value == signup[i].password) {
            var y = signup[i].name
            localStorage.setItem("username", y)
            location.href = "../../login/home/index.html"


        } else {
            layer.style.display = "none"
            layer3.style.display = "block"
        }

    }


}
icon1.addEventListener("click", function () {
    passwordinput.type = "text"
    icon1.style.display = "none"
    icon3.style.display = "block"

})
icon3.addEventListener("click", function () {

    passwordinput.type = "password"
    icon1.style.display = "block"
    icon3.style.display = "none"

})