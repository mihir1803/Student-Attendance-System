const headers = { Authorization: 'Bearer ' + localStorage.getItem("token") }
const table = document.querySelector("#college_admin_table")

async function get_college_admin(event) {
    try {
        let college_admin = await axios({
            method: "GET",
            url: "http://localhost:8000/get-students/",
            headers
        })
        console.log(college_admin.data)
        const college_admin_details = students.data // change
        let i = 1
        for (let college_admins of college_admin_details) { 
            console.log(college_admins)
            const html = `
            <tr>
            <td data-label="Id">${i}</td>
            <td data-label="Contect Number">${student.user[0].contact_number}</td>
            <td data-label="Name"><a href="college-admin-manage-student-details.html?id=${student.user[0]._id}">${student.user[0].first_name} ${student.user[0].last_name}</a></td>
            <td data-label="Course">${student.gr_number || "-"}</td>
          
            </tr>
            `
            table.insertAdjacentHTML("beforeend",html)
            i++
        }
    } catch (error) {
        console.log(error)
    }
}

window.onload = get_college_admin
