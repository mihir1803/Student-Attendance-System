const body = document.querySelector("#faculty_table_body")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };


async function getCollegeAdminData() {
    try {
        let faculties = await axios({
            method: "GET",
            url: `http://localhost:8000/manage-faculty/`,
            headers
        })
        console.log(faculties.data.faculties[0])
        body.innerHTML = "";
        // console.log(college_admin_data.data.college_admins[0])
        faculties = faculties.data.faculties
        if(faculties.length == "0"){
            let html = `<h3>There are no faculties</h3>`
            body.insertAdjacentHTML("beforeend",html)
        }
        let i = 0;
        for (let faculty of faculties) {
            i++;
            let html = `
            <tr>
            <input type="hidden" value="${faculty._id}" class="college-admin-id">
            <td>${i}</td>
            <td>${faculty.first_name} ${faculty.middle_name} ${faculty.last_name}</td>
            <td>${faculty.contact_number}</td>
            <td>
                
                    <a href="faculty-fomr1.html?id=${faculty._id}"><img src="images/icon/edit.svg" class="image-icon"   alt="" srcset=""></a>
            </td>
            <td>
                <a class="delete-college-admin" href="#" class="hide">
                <img src="images/icon/delete.svg" class="image-icon" alt="" srcset="">
                </a>
            </td>
            </tr>
        `
            body.insertAdjacentHTML("beforeend", html)
        }
    } catch (error) {
        console.log(error)
    }
}

const delete_handler = async (event) =>{
    if(event.target.classList.contains("delete-college-admin")){
        const attendanceID = event.target.closest("tr").querySelector(".college-admin-id").value
        console.log('Attendance ID:', attendanceID);
        console.log(event.target.closest("tr"))
        try {
            let attendance_change_details = await axios({
                method:"DELETE",
                url:`http://localhost:8000/manage-college-admin/${attendanceID}/`,
                headers
            })
            event.target.closest("tr").remove()
            getCollegeAdminData()
            console.log(attendance_change_details)
        } catch (error) {
            console.log(error)
        }
    }
}

body.addEventListener("click",delete_handler)

getCollegeAdminData()