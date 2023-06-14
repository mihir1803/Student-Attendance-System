const course = document.querySelector("#course")
const semester = document.querySelector("#semester")
const submit = document.querySelector(".add")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };
const message = document.querySelector(".message")

async function Insert_System_Admin(event){
    event.preventDefault();
    try{
        payload = {
            course_name:course.value,
            number_of_semester:semester.value,
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
            url : `http://localhost:8000/manage-course/`,
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

submit.addEventListener("click",Insert_System_Admin)