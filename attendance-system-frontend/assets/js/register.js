const first_name = document.querySelector("#first_name");
const middle_name = document.querySelector("#middle_name");
const last_name = document.querySelector("#last_name");
const date_of_birth = document.querySelector("#date_of_birth");
const genders = document.querySelectorAll('input[name="gender"]');
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const contact_number = document.querySelector("#contact_number");
const address_line_1 = document.querySelector("#address_line_1");
const address_line_2 = document.querySelector("#address_line_2");
const landmark = document.querySelector("#landmark");
const pincode = document.querySelector("#pincode");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const college = document.querySelector("#college");
const role = document.querySelector("#role");
const submit = document.querySelector("#submit");
const message = document.querySelector("#message");



function matchPassword(event) {
    if (password.value != confirm_password.value) {
        document.querySelector(".pass").classList.add("error")
        document.querySelector(".cf").classList.add("error")
        console.log("password is not match")
    }
    else {
        document.querySelector(".pass").classList.remove("error")
        document.querySelector(".cf").classList.remove("error")
    }
}

async function register(event) {
    event.preventDefault();
    try {
        let selectedGender = ""
        for (const gendar of genders) {
            if (gendar.checked) {
                selectedGender = gendar.value;
                break;
            }
        }
        matchPassword();
        payload = {
            first_name: first_name.value,
            middle_name: middle_name.value,
            last_name: last_name.value,
            date_of_birth: date_of_birth.value,
            email: email.value,
            password: password.value,
            gender: selectedGender,
            contact_number: contact_number.value,
            address_line_1: address_line_1.value,
            address_line_2: address_line_2.value,
            landmark: landmark.value,
            pincode: pincode.value,
            state: state.value,
            city: city.value,
            college: college.value,
            role: role.value
        }
        console.log(payload)
        let register_info = await axios({
            method: "POST",
            url: "http://localhost:8000/signup/",
            data: payload
        })
        console.log(register_info)
        const html = `<div class="alert alert-success" role="alert">
        User Registered
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        setTimeout(redirect,500);
    } catch (error) {
        console.log(error)
        const html = `<div class="alert alert-primary" role="alert">
        <span id = "message" style="color:red">${error.response.data.message}</span>
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
    }

}

function redirect() {
    window.location.href = `/login.html`
}


confirm_password.addEventListener("input", matchPassword)
submit.addEventListener("click", register)