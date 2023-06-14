const admin_name = document.querySelector("#admin_name")
const email_id = document.querySelector("#email_id")
const pass = document.querySelector("#pass")
const confirm_pass = document.querySelector("#pass1")
const submit = document.querySelector(".add")
const message = document.querySelector(".message")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };

async function Insert_System_Admin(event){
    event.preventDefault();
    try{
        payload = {
            username:admin_name.value,
            email:email_id.value,
            password:pass.value,
        }
        for(const data in payload)
        {
            if(payload[data] == "")
            {
                error_message="Invalid Data"
                alert("Please make sure that any of field is not empty")
                return
            }
        }
        console.log(payload)
        let Insert_info = await axios({
            method:"POST",
            url : `http://localhost:8000/add-new-admin/`,
            data : payload,
            headers
        })
        console.log(Insert_info)
        const html = `<div class="alert alert-success" role="alert">
        ${Insert_info.data.message}
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        // console.log(error)
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

submit.addEventListener("click",Insert_System_Admin)