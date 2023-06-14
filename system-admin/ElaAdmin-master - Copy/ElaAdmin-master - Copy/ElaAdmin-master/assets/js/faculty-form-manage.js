const college_admin_name = document.querySelector("#college_admin_name")
const contect = document.querySelector("#contect")
const add_line_1 = document.querySelector("#add_line_1")
const add_line_2 = document.querySelector("#add_line_2")
const landmark = document.querySelector("#landmark")
const pincode =document.querySelector("#pin_code")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
const edit = document.querySelector(".add")
const message = document.querySelector(".message")

async function Edit_College_Admin(event){
    event.preventDefault();
    try{
        const [first_name,middle_name,last_name] = college_admin_name.value.split(" ")
        payload = {
            first_name,
            middle_name,
            last_name,
            contact_number:contect.value,
            address_line_1:add_line_1.value,
            address_line_2:add_line_2.value,
            landmark:landmark.value,
            pincode:pincode.value,
        }
        for (const data in payload) {
            if (payload[data] === "")
                delete payload[data]
        }
        console.log(payload)
        let Update_info = await axios({
            method:"PATCH",
            url : `http://localhost:8000/manage-faculty/${id}/`,
            data : payload,
            headers
        })
        const html = `<div class="alert alert-success" role="alert">
        ${Update_info.data.message}
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend",html)
        console.log(Update_info)
    } catch (error)
    {
        const html = `<div class="alert alert-primary" role="alert">
        <span id = "message" style="color:red">${error.response.data.message}</span>
        </div>`
        message.innerHTML = ""
        message.insertAdjacentHTML("beforeend", html)
        console.log(error)
    }
}
edit.addEventListener("click",Edit_College_Admin)

async function loadData(){
    try {
        let faculty = await axios({
            method: "GET",
            url: `http://localhost:8000/manage-faculty/${id}/`,
            headers
        })
        faculty = faculty.data.faculty
        college_admin_name.value = `${faculty.first_name} ${faculty.middle_name} ${faculty.last_name}`
        contect.value = faculty.contact_number
        add_line_1.value = faculty.address_line_1
        add_line_2.value = faculty.address_line_2
        landmark.value = faculty.landmark
        pincode.value = faculty.pincode
        console.log(college_admin_data.data.college_admins)
    }
    catch(error){
        console.log(error)
    }
}

loadData()