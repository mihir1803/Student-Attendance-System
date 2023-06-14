const body = document.querySelector("#college_admin_table")
const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") };


async function getCollegeAdminData() {
    try {
        const college_admin_data = await axios({
            method: "GET",
            url: `http://localhost:8000/manage-college-admin/`,
            headers
        })

        body.innerHTML = "";
        console.log(college_admin_data.data.college_admins[0])
        const college_admins = college_admin_data.data.college_admins
        if(college_admins.length == "0"){
            let html = `<h3>There are no college admins</h3>`
            body.insertAdjacentHTML("beforeend",html)
        }
        let i = 0;
        for (let college_admin of college_admins) {
            i++;
            let html = `
            <tr>
            <input type="hidden" value="${college_admin._id}" class="college-admin-id">
            <td>${i}</td>
            <td>${college_admin.contact_number}</td>
            <td>${college_admin.first_name} ${college_admin.middle_name} ${college_admin.last_name}</td>
            <td>
                
                    <a href="college-admin-form2.html?id=${college_admin._id}"><img src="images/icon/edit.svg" class="image-icon"   alt="" srcset=""></a>
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