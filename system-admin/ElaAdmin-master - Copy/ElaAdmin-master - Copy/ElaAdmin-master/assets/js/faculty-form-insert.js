const college_admin_name = document.querySelector("#faculty_name")
const contect = document.querySelector("#contect")
const add_line_1 = document.querySelector("#add_line_1")
const add_line_2 = document.querySelector("#add_line_2")
const landmark = document.querySelector("#landmark")
const password = document.querySelector("#password")
const pincode =document.querySelector("#pin_code")
const email = document.querySelector("#email")
const submit = document.querySelector(".add")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };
const message = document.querySelector(".message")

async function Insert_College_Admin(event){
    event.preventDefault();
    try{
        let [first_name,middle_name,last_name]=(college_admin_name.value).split(" "),
        payload = {
            first_name,
            middle_name,
            last_name,
            contact_number:contect.value,
            address_line_1:add_line_1.value,
            address_line_2:add_line_2.value,
            landmark:landmark.value,
            pincode:pincode.value,
            password:password.value,
            email:email.value
        }
        console.log(payload)
        for(const data in payload)
        {
            if(payload[data] == "")
            {
                alert("Please make sure that any of field is not empty")
                return
            }
        }
        console.log(payload)
        let Insert_info = await axios({
            method:"POST",
            url : `http://localhost:8000/manage-faculty/`,
            data : payload,
            headers
        })
        const html = `<div class="alert alert-success" role="alert">
        ${Insert_info.data.message}
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        console.log(Insert_info)
    } catch (error)
    {
        const html = `<div class="alert alert-primary" role="alert">
        <span id = "message" style="color:red">${error.response.data.message}</span>
        </div>`
        console.log(html)
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        console.log(error)
    }
}

submit.addEventListener("click",Insert_College_Admin)