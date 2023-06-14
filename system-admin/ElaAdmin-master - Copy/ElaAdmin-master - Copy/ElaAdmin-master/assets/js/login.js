const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message")
let user_role = ""

localStorage.is_authenticated = "false"


async function login(event) {
    event.preventDefault();
    try {
        payload = {
            email: email.value,
            password: password.value
        }
        for (const data in payload) {
            if (payload[data] === ""){
                error_message = "Invalid Data"
                alert("Please make sure that any of that field is not empty")
                return
            }
        }
        console.log(payload)
        let login_info = await axios({
            method: "POST",
            url: "http://localhost:8000/login/",
            data: payload
        })
        console.log(login_info.data)
        const token = login_info.data.token
        
        const name = login_info.data.fullname
        localStorage.setItem("name",name)

        
        user_role = login_info.data.role
        localStorage.setItem("token", token)
        localStorage.setItem("is_authenticated", true)
        const html = `<div class="alert alert-success" role="alert">
        Login Successful
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        setTimeout(redirect, 500)
    } catch (error) {
        console.log(error.response.data.message)
        localStorage.setItem("is_authenticated", false)
        const html = `<div class="alert alert-primary" role="alert">
        <span id = "message" style="color:red">${error.response.data.message}</span>
        </div>`
        console.log(html)
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
    }
}

submit.addEventListener("click", login)

function redirect() {
    if (localStorage.is_authenticated == "true" && user_role == "admin")
        window.location.href = "/index1.html";
}
